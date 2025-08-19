'use client';

import { useEffect, useRef } from 'react';
import { randomInRange } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: randomInRange(0, canvas.width),
        y: randomInRange(0, canvas.height),
        vx: randomInRange(-0.5, 0.5),
        vy: randomInRange(-0.5, 0.5),
        size: randomInRange(1, 3),
        alpha: randomInRange(0.2, 0.6),
      });
    }

    // Animation loop
    let animationFrame: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(187, 247, 108, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(187, 247, 108, ${particle.alpha})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
      aria-hidden="true"
    />
  );
}
