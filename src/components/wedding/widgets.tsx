import { useEffect, useRef, useState } from "react";
import { Music, Pause, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { WEDDING_DATE } from "@/lib/wedding";
import logo from "@/assets/mima-logo.png.asset.json";

const NAV = [
  ["Home", "#home"],
  ["Our Story", "#story"],
  ["The Couple", "#couple"],
  ["Details", "#details"],
  ["Gallery", "#gallery"],
  ["RSVP", "#rsvp"],
  ["Gifts", "#gifts"],
  ["Location", "#location"],
] as const;

export function Intro() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 3200);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  return (
    <button
      onClick={() => setGone(true)}
      aria-label="Enter invitation"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-wine-radial"
      style={{ animation: "fade-out-intro .8s ease 2.5s forwards" }}
    >
      <img src={logo.url} alt="MiMa 2026" className="w-40 animate-rise sm:w-52" />
      <p className="mt-6 font-caps text-xl tracking-[0.3em] text-ivory animate-rise" style={{ animationDelay: ".8s" }}>
        MIDE <span className="font-script text-3xl tracking-normal text-gold-foil">&amp;</span> MARY
      </p>
      <p className="eyebrow mt-8 text-gold/70 animate-rise" style={{ animationDelay: "1.4s" }}>Tap to enter</p>
    </button>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "bg-wine-deep/90 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo.url} alt="MiMa 2026" className="h-10 w-10" />
        </a>
        <nav className="hidden gap-5 md:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="eyebrow text-ivory/80 transition-colors hover:text-gold">{l}</a>
          ))}
        </nav>
        <button className="p-2 text-gold md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-wine-radial md:hidden">
          <button className="absolute right-5 top-4 p-2 text-gold" onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="h-7 w-7" />
          </button>
          <img src={logo.url} alt="" className="mb-4 w-24" />
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="font-caps text-lg tracking-[0.25em] text-ivory">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = now === null ? 0 : WEDDING_DATE.getTime() - now;
  if (now !== null && diff <= 0)
    return <p className="font-script text-5xl text-gold-foil">Today, we celebrate love.</p>;
  const s = Math.max(0, Math.floor(diff / 1000));
  const parts = [
    ["Days", Math.floor(s / 86400)],
    ["Hours", Math.floor((s % 86400) / 3600)],
    ["Minutes", Math.floor((s % 3600) / 60)],
    ["Seconds", s % 60],
  ] as const;
  return (
    <div className="grid grid-cols-4 divide-x divide-gold/30">
      {parts.map(([l, v]) => (
        <div key={l} className="px-2 text-center sm:px-8">
          <div className="font-serif text-4xl tabular-nums text-gold-foil sm:text-6xl">
            {now === null ? "--" : String(v).padStart(2, "0")}
          </div>
          <div className="eyebrow mt-2 !text-[0.58rem] text-ivory/70 sm:!text-[0.7rem]">{l}</div>
        </div>
      ))}
    </div>
  );
}

/** Gentle generated music-box melody (no file needed); never autoplays. */
export function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const step = useRef(0);
  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46, 523.25, 659.25, 783.99, 1046.5, 493.88, 587.33, 783.99, 587.33];

  const play = () => {
    const ctx = ctxRef.current ?? new AudioContext();
    ctxRef.current = ctx;
    ctx.resume();
    timer.current = setInterval(() => {
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = notes[step.current % notes.length] ?? 523.25;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.08, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + 1.9);
      step.current++;
    }, 420);
    setPlaying(true);
  };
  const pause = () => {
    if (timer.current) clearInterval(timer.current);
    setPlaying(false);
  };
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  return (
    <button
      onClick={playing ? pause : play}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold/60 bg-wine-deep/90 text-gold shadow-luxe backdrop-blur"
    >
      {playing ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
      {playing && <span className="absolute inset-0 animate-ping rounded-full border border-gold/40" />}
    </button>
  );
}

export type Shot = { src?: string; pos?: string; alt: string; tall?: boolean };

export function Lightbox({ shots, index, onClose, onNav }: { shots: Shot[]; index: number; onClose: () => void; onNav: (d: number) => void }) {
  const startX = useRef(0);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose, onNav]);
  const s = shots[index];
  if (!s) return null;
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-wine-deep/95 p-4"
      onClick={onClose}
      onTouchStart={(e) => (startX.current = (e.touches[0]?.clientX ?? 0))}
      onTouchEnd={(e) => {
        const dx = (e.changedTouches[0]?.clientX ?? 0) - startX.current;
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
      }}
    >
      <button className="absolute right-4 top-4 p-2 text-gold" aria-label="Close"><X className="h-7 w-7" /></button>
      <button className="absolute left-2 p-3 text-gold" aria-label="Previous" onClick={(e) => { e.stopPropagation(); onNav(-1); }}><ChevronLeft className="h-8 w-8" /></button>
      <img src={s.src} alt={s.alt} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full border border-gold/50 object-contain" />
      <button className="absolute right-2 p-3 text-gold" aria-label="Next" onClick={(e) => { e.stopPropagation(); onNav(1); }}><ChevronRight className="h-8 w-8" /></button>
    </div>
  );
}
