import Link from 'next/link';
import { PrintButton } from './PrintButton';
import { contact, summary, skillGroups, entries, projects, education, certifications } from './resumeData';

export function ResumeDocument({ variant }: { variant: 'standard' | 'detailed' }) {
  const detailed = variant === 'detailed';

  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0.5in 0.55in; size: letter; }
          /* globals.css makes body a scroll container (overflow-x: hidden),
             which Chrome cannot fragment into pages: printing yields blank
             pages. Restore normal flow for print. */
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            min-height: 0 !important;
            height: auto !important;
            overflow: visible !important;
            position: static !important;
          }
          .no-print, .fixed { display: none !important; }
          .page {
            box-shadow: none !important;
            min-height: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          a { color: inherit !important; text-decoration: none !important; }
          .keep-link { color: #1d4ed8 !important; }
          .entry-head { break-inside: avoid; break-after: avoid; page-break-after: avoid; }
          .entry li { break-inside: avoid; }
        }
        body { background: #f4f4f4; }
      `}</style>

      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <a
          href={
            detailed
              ? '/resume/Dev-Ganugapenta-Resume-Detailed.pdf'
              : '/resume/Dev-Ganugapenta-Resume.pdf'
          }
          download
          className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg"
        >
          Download PDF
        </a>
        <PrintButton />
        <Link
          href={detailed ? '/talent/dev-ganuga/resume' : '/talent/dev-ganuga/resume/detailed'}
          className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg border border-gray-200"
        >
          {detailed ? '2-page version' : 'Detailed version'}
        </Link>
        <Link
          href="/talent/dev-ganuga"
          className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg border border-gray-200"
        >
          ← Portfolio
        </Link>
      </div>

      <div className="page min-h-screen bg-white max-w-[816px] mx-auto shadow-xl my-8 print:my-0 print:shadow-none font-sans text-[#111]">
        <div className="px-12 py-10 print:px-0 print:py-0">

          {/* Header */}
          <header className="mb-3 pb-2 border-b border-black">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h1 className="text-[26px] font-bold tracking-tight text-black leading-none">
                {contact.name}
              </h1>
              <p className="text-[12px] text-gray-600">{contact.location}</p>
            </div>
            <p className="text-[13px] font-semibold text-gray-800 mt-1.5 mb-1.5">
              {contact.headline}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-gray-600">
              <a href={contact.phoneHref} className="keep-link text-blue-700 hover:underline">{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="keep-link text-blue-700 hover:underline">{contact.email}</a>
              <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">{contact.linkedin}</a>
              <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">{contact.github}</a>
              <a href={`https://${contact.site}`} target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">{contact.site}</a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-3">
            <p className="text-[12.5px] text-gray-800 leading-[1.5]">{summary}</p>
          </section>

          {/* Skills */}
          <section className="mb-3">
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Skills
            </h2>
            <div className="space-y-0.5">
              {skillGroups.map((g) => (
                <p key={g.label} className="text-[11.5px] text-gray-800 leading-[1.5]">
                  <strong className="text-black">{g.label}:</strong> {g.items}
                </p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-3">
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-300 pb-1">
              Experience
            </h2>

            {entries.map((e) => (
              <div key={`${e.company}-${e.period}`} className="entry mb-2">
                <div className="entry-head">
                  <div className="flex justify-between items-baseline gap-3">
                    <h3 className="text-[13px] font-bold text-black leading-tight">
                      {e.title} · {e.company}
                    </h3>
                    <span className="text-[11px] text-gray-500 flex-shrink-0 whitespace-nowrap">{e.period}</span>
                  </div>
                  <p className="text-[11.5px] text-gray-500 mb-1">
                    {e.location ? `${e.location} · ${e.oneLiner}` : e.oneLiner}
                  </p>
                </div>
                <ul className="space-y-0.5 text-[12px] text-gray-800 leading-[1.4]">
                  {(detailed ? e.detailedBullets : e.bullets).map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-3">
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-300 pb-1">
              Projects
            </h2>
            {projects.map((p) => (
              <div key={`${p.name}-${p.period}`} className="entry mb-2">
                <div className="entry-head">
                  <div className="flex justify-between items-baseline gap-3">
                    <h3 className="text-[13px] font-bold text-black leading-tight">
                      {p.name} · {p.url}
                    </h3>
                    <span className="text-[11px] text-gray-500 flex-shrink-0 whitespace-nowrap">{p.period}</span>
                  </div>
                  <p className="text-[11.5px] text-gray-500 mb-1">
                    {p.location ? `${p.location} · ${p.oneLiner}` : p.oneLiner}
                  </p>
                </div>
                <ul className="space-y-0.5 text-[12px] text-gray-800 leading-[1.4]">
                  {(detailed ? p.detailedBullets : p.bullets).map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-3">
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Education
            </h2>
            <div className="space-y-1 text-[12px] text-gray-800">
              {education.map((ed) => (
                <div key={ed.institution} className="flex justify-between gap-4">
                  <span>
                    <strong>{ed.institution}</strong> — {ed.detail}
                  </span>
                  <span className="text-gray-500 flex-shrink-0">{ed.year}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Certifications
            </h2>
            <div className="space-y-1 text-[12px] text-gray-800">
              {certifications.map((ed) => (
                <div key={ed.institution} className="flex justify-between gap-4">
                  <span>
                    <strong>{ed.institution}</strong> — {ed.detail}
                  </span>
                  <span className="text-gray-500 flex-shrink-0">{ed.year}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
