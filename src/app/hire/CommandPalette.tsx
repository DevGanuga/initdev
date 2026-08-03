'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Star,
  Check,
  CornerDownLeft,
} from 'lucide-react';
import { person, sections, engagements } from './data';

type Action = {
  id: string;
  label: string;
  group: string;
  icon: React.ReactNode;
  keywords?: string;
  run: () => void;
  closeAfter?: boolean;
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  }, []);

  const actions = useMemo<Action[]>(() => {
    const nav: Action[] = sections.map((s) => ({
      id: `nav-${s.id}`,
      label: s.label,
      group: 'jump to',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
      run: () => scrollToId(s.id),
    }));

    const work: Action[] = engagements.map((e) => ({
      id: `work-${e.id}`,
      label: e.name,
      group: 'case studies',
      keywords: `${e.tagline} ${e.tech.join(' ')}`,
      icon: <span className="w-1.5 h-1.5 rounded-full" style={{ background: e.dot }} />,
      run: () => scrollToId('record'),
    }));

    const quick: Action[] = [
      {
        id: 'resume',
        label: 'download resume (pdf)',
        group: 'actions',
        icon: <Download className="w-3.5 h-3.5" />,
        run: () => window.open(person.resume, '_blank'),
      },
      {
        id: 'copy-email',
        label: copied ? 'email copied' : 'copy email address',
        group: 'actions',
        keywords: person.email,
        icon: copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Mail className="w-3.5 h-3.5" />
        ),
        run: copyEmail,
        closeAfter: false,
      },
      {
        id: 'email',
        label: 'send an email',
        group: 'actions',
        icon: <Mail className="w-3.5 h-3.5" />,
        run: () => {
          window.location.href = `mailto:${person.email}`;
        },
      },
      {
        id: 'upwork',
        label: 'upwork profile',
        group: 'links',
        keywords: 'top rated plus reviews',
        icon: <Star className="w-3.5 h-3.5" />,
        run: () => window.open(person.upwork, '_blank'),
      },
      {
        id: 'github',
        label: 'github',
        group: 'links',
        icon: <Github className="w-3.5 h-3.5" />,
        run: () => window.open(person.githubUrl, '_blank'),
      },
      {
        id: 'linkedin',
        label: 'linkedin',
        group: 'links',
        icon: <Linkedin className="w-3.5 h-3.5" />,
        run: () => window.open(person.linkedin, '_blank'),
      },
    ];

    return [...quick, ...nav, ...work];
  }, [copied, copyEmail]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.group.toLowerCase().includes(q) ||
        a.keywords?.toLowerCase().includes(q),
    );
  }, [actions, query]);

  // Group preserving order of first appearance
  const groups = useMemo(() => {
    const map = new Map<string, Action[]>();
    filtered.forEach((a) => {
      const list = map.get(a.group) ?? [];
      list.push(a);
      map.set(a.group, list);
    });
    return Array.from(map.entries());
  }, [filtered]);

  const flat = useMemo(() => groups.flatMap(([, items]) => items), [groups]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
    restoreFocusRef.current?.focus();
  }, []);

  const runAction = useCallback(
    (action: Action) => {
      action.run();
      if (action.closeAfter !== false) close();
    },
    [close],
  );

  // Global hotkey
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) restoreFocusRef.current = document.activeElement as HTMLElement;
          return !prev;
        });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock scroll + focus input while open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [open]);

  // Keep the active row clamped when the filter changes
  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(flat.length - 1, 0)));
  }, [flat.length]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (flat.length ? (a + 1) % flat.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (flat.length ? (a - 1 + flat.length) % flat.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const action = flat[active];
      if (action) runAction(action);
    }
  };

  // Scroll active row into view
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => {
          restoreFocusRef.current = document.activeElement as HTMLElement;
          setOpen(true);
        }}
        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/20 transition-colors group"
        aria-label="Open command palette"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="text-xs">search</span>
        <kbd className="ml-2 px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/[0.06] border border-white/[0.08] text-white/40 group-hover:text-white/60">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#0b0b0c] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -4 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onKeyDown={onKeyDown}
            >
              {/* Input */}
              <div className="flex items-center gap-3 px-4 h-14 border-b border-white/[0.07]">
                <Search className="w-4 h-4 text-white/30 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  placeholder="search work, jump to a section, grab the resume…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/25 outline-none"
                />
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/[0.06] border border-white/[0.08] text-white/35">
                  esc
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
                {flat.length === 0 && (
                  <p className="px-4 py-8 text-center text-sm text-white/30">
                    nothing matches that
                  </p>
                )}

                {groups.map(([group, items]) => (
                  <div key={group} className="mb-1">
                    <p className="px-4 pt-2 pb-1 text-[10px] font-medium tracking-[0.12em] uppercase text-white/25">
                      {group}
                    </p>
                    {items.map((item) => {
                      const index = flat.indexOf(item);
                      const isActive = index === active;
                      return (
                        <button
                          key={item.id}
                          data-index={index}
                          onClick={() => runAction(item)}
                          onMouseMove={() => setActive(index)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                            isActive ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
                          }`}
                        >
                          <span
                            className={`flex items-center justify-center w-4 ${
                              isActive ? 'text-white/70' : 'text-white/35'
                            }`}
                          >
                            {item.icon}
                          </span>
                          <span
                            className={`text-sm flex-1 ${
                              isActive ? 'text-white' : 'text-white/60'
                            }`}
                          >
                            {item.label}
                          </span>
                          {isActive && (
                            <CornerDownLeft className="w-3.5 h-3.5 text-white/30" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-4 h-10 border-t border-white/[0.07] bg-white/[0.015]">
                <Hint keys="↑↓" label="navigate" />
                <Hint keys="↵" label="select" />
                <Hint keys="esc" label="close" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hint({ keys, label }: { keys: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/[0.06] border border-white/[0.08] text-white/40">
        {keys}
      </kbd>
      <span className="text-[10px] text-white/25">{label}</span>
    </span>
  );
}
