import { useEffect, useRef, useState, type ReactNode } from "react";

/** Botanical branch using the invitation's semantic palette. */
export function Branch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} fill="none" aria-hidden>
      <path d="M100 0 C95 60 80 120 60 250" stroke="var(--gold)" strokeWidth="1.4" />
      {[30, 70, 110, 150, 190].map((y, i) => (
        <g key={y}>
          <path
            d={`M${98 - i * 6} ${y} q-30 -6 -44 14 q30 4 44 -14z`}
            fill="var(--gold)"
            opacity={0.85}
          />
          <path
            d={`M${98 - i * 6} ${y + 14} q30 -10 46 6 q-30 10 -46 -6z`}
            fill="var(--gold-soft)"
            opacity={0.7}
          />
        </g>
      ))}
      <circle cx="58" cy="120" r="11" fill="var(--wine)" stroke="var(--gold)" strokeWidth="1" />
      <circle cx="58" cy="120" r="5" fill="var(--wine-deep)" />
      <circle cx="120" cy="60" r="8" fill="var(--wine)" stroke="var(--gold)" strokeWidth="1" />
      <circle cx="78" cy="205" r="9" fill="var(--wine)" stroke="var(--gold)" strokeWidth="1" />
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-16 bg-gold/70" />
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="var(--gold)">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <span className="h-px w-16 bg-gold/70" />
    </div>
  );
}

export function Particles({ count = 22 }: { count?: number }) {
  const [dots, setDots] = useState<{ l: number; d: number; s: number; delay: number }[]>([]);
  useEffect(() => {
    setDots(
      Array.from({ length: count }, () => ({
        l: Math.random() * 100,
        d: 14 + Math.random() * 16,
        s: 2 + Math.random() * 3,
        delay: -Math.random() * 25,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-gold-soft"
          style={{
            left: `${p.l}%`,
            width: p.s,
            height: p.s,
            boxShadow: "0 0 8px var(--gold)",
            animation: `float-up ${p.d}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, light }: { eyebrow?: string; title: string; light?: boolean }) {
  return (
    <Reveal className="mb-12 text-center">
      {eyebrow && <p className={`eyebrow mb-4 ${light ? "text-gold" : "text-primary/70"}`}>{eyebrow}</p>}
      <h2 className={`font-caps text-3xl tracking-[0.15em] sm:text-4xl ${light ? "text-ivory" : "text-primary"}`}>{title}</h2>
      <Divider className="mt-6" />
    </Reveal>
  );
}
