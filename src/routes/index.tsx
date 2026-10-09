import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { QRCodeSVG } from "qrcode.react";
import { CalendarHeart, Clock, MapPin, Phone, MessageCircle, Heart } from "lucide-react";
import couple from "@/assets/couple.jpg.asset.json";
import logo from "@/assets/mima-logo.png.asset.json";
import gallerySelfie from "@/assets/gallery-selfie.jpeg.asset.json";
import galleryTogether from "@/assets/gallery-together.jpeg.asset.json";
import galleryMaryMide from "@/assets/gallery-mary-mide.jpeg.asset.json";
import galleryCouple from "@/assets/gallery-couple.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { CoupleBiographies, Gifts } from "@/components/wedding/couple-details";
import { Branch, Divider, Particles, Reveal, SectionTitle } from "@/components/wedding/ornaments";
import { Countdown, Intro, Lightbox, MusicButton, Nav, type Shot } from "@/components/wedding/widgets";
import { MAPS_EMBED, MAPS_URL, PHONES, VENUE, formatPhone, whatsappUrl } from "@/lib/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mide & Mary — Holy Matrimony · 19 December 2026" },
      { name: "description", content: "You are invited to the Holy Matrimony of Mide & Mary, 19th December 2026, 2PM, Ibeju-Lekki, Lagos. Kindly RSVP." },
      { property: "og:title", content: "Mide & Mary — Save the Date" },
      { property: "og:description", content: "Holy Matrimony · 19th December 2026 · 2PM · Abijo G.R.A, Ibeju-Lekki, Lagos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Names({ size = "hero" }: { size?: "hero" | "card" }) {
  const big = size === "hero" ? "text-6xl sm:text-8xl lg:text-9xl" : "text-5xl sm:text-6xl";
  return (
    <h1 className={`font-caps ${big} leading-none tracking-[0.08em] text-ivory`}>
      MIDE
      <span className={`mx-2 block font-script tracking-normal text-gold-foil sm:inline ${size === "hero" ? "text-7xl sm:text-9xl" : "text-6xl"}`}>&amp;</span>
      MARY
    </h1>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-wine-radial">
      <Particles />
      <Branch className="pointer-events-none absolute -left-6 -top-4 w-28 opacity-70 animate-sway sm:w-40" />
      <Branch className="pointer-events-none absolute -right-6 -top-4 w-28 -scale-x-100 opacity-70 animate-sway sm:w-40" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-24 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm animate-rise lg:order-2 lg:max-w-md">
          <div className="absolute -inset-3 rounded-t-full border border-gold/50" />
          <div className="overflow-hidden rounded-t-full border-2 border-gold shadow-luxe">
            <img src={couple.url} alt="Mide and Mary" className="aspect-[3/4] w-full object-cover object-top animate-slow-zoom" />
          </div>
          <img src={logo.url} alt="MiMa 2026" className="absolute -bottom-8 left-1/2 w-24 -translate-x-1/2 rounded-full bg-wine-deep p-2 sm:w-28" />
        </div>
        <div className="text-center lg:text-left">
          <p className="eyebrow animate-rise text-gold" style={{ animationDelay: ".3s" }}>Save the Date</p>
          <div className="my-6 animate-rise" style={{ animationDelay: ".5s" }}><Names /></div>
          <p className="eyebrow animate-rise text-ivory/80" style={{ animationDelay: ".8s" }}>Invite you to their</p>
          <p className="mt-2 font-script text-5xl text-gold-foil animate-rise sm:text-6xl" style={{ animationDelay: "1s" }}>Holy Matrimony</p>
          <p className="mt-6 font-caps text-base tracking-[0.3em] text-ivory animate-rise sm:text-lg" style={{ animationDelay: "1.2s" }}>19th December 2026 <span className="text-gold">|</span> 2PM</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-rise lg:justify-start" style={{ animationDelay: "1.4s" }}>
            <a href="#rsvp" className="btn-gold">RSVP</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivateNotice() {
  return (
    <section className="bg-secondary/60 px-5 py-10">
      <div className="mx-auto max-w-2xl border border-gold/60 bg-card px-6 py-6 text-center shadow-luxe">
        <p className="eyebrow text-primary">Strictly by Invitation</p>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          This event is strictly by invitation. Please do not share this link with anyone. If this link is shared, the organisers will be notified and such guests will be banned from attending.
        </p>
      </div>
    </section>
  );
}

function CountdownBand() {
  return (
    <section className="relative border-y border-gold/30 bg-wine-deep px-4 py-14 text-center">
      <p className="eyebrow mb-8 text-gold/80">Counting down to forever</p>
      <div className="mx-auto max-w-3xl"><Countdown /></div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="px-5 py-24">
      <SectionTitle eyebrow="Our Story" title="TWO HEARTS, ONE JOURNEY" />
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-sm p-3">
            <div className="absolute inset-0 border border-gold" />
            <div className="absolute inset-3 translate-x-4 translate-y-4 border border-primary/30" />
            <img src={couple.url} alt="Mide and Mary" className="relative aspect-[4/5] w-full object-cover object-[50%_20%] shadow-luxe" />
          </div>
        </Reveal>
        <Reveal delay={200} className="text-center md:text-left">
          <p className="font-script text-4xl leading-snug text-primary sm:text-5xl">“Two hearts, one love, one beautiful journey.”</p>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            <span className="font-caps tracking-widest text-primary">MIDE &amp; MARY</span> invite you to celebrate with them as they begin this beautiful journey together.
          </p>
          <Heart className="mx-auto mt-8 h-6 w-6 text-gold md:mx-0" fill="currentColor" />
        </Reveal>
      </div>
    </section>
  );
}

function Details() {
  const items = [
    { icon: CalendarHeart, label: "Date", value: "19th December 2026" },
    { icon: Clock, label: "Time", value: "2:00 PM" },
    { icon: MapPin, label: "Venue", value: VENUE },
  ];
  return (
    <section id="details" className="bg-secondary/60 px-5 py-24">
      <SectionTitle eyebrow="Holy Matrimony" title="THE BIG DAY" />
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 150}>
            <div className="h-full border border-gold/50 bg-card p-8 text-center shadow-luxe">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold text-gold">
                <it.icon className="h-6 w-6" />
              </div>
              <p className="eyebrow text-primary/70">{it.label}</p>
              <p className="mt-3 text-xl leading-snug text-foreground">{it.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="eyebrow mb-6 text-primary">Dress Code: Green &amp; White</p>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-gold"><MapPin className="h-4 w-4" />Get Directions</a>
      </div>
    </section>
  );
}

function InviteCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <section className="relative overflow-hidden bg-wine-radial px-5 py-24">
      <Particles count={14} />
      <Reveal>
        <div
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          className="relative mx-auto max-w-md bg-wine p-3 shadow-luxe transition-transform duration-300"
        >
          <div className="relative overflow-hidden border border-gold px-6 py-14 text-center">
            <div className="absolute inset-2 border border-gold/40" />
            <Branch className="absolute -left-8 -top-6 w-28 opacity-90" />
            <Branch className="absolute -bottom-6 -right-8 w-28 rotate-180 opacity-90" />
            <img src={logo.url} alt="MiMa 2026" className="relative mx-auto w-20" />
            <p className="eyebrow relative mt-6 text-gold">Save the Date</p>
            <div className="relative my-5"><Names size="card" /></div>
            <p className="eyebrow relative text-ivory/80">Invite you to their</p>
            <p className="relative mt-2 font-caps text-xl tracking-[0.25em] text-gold-foil">HOLY MATRIMONY</p>
            <Divider className="relative my-6" />
            <p className="relative font-caps tracking-[0.3em] text-ivory">19TH DECEMBER 2026</p>
            <p className="relative mt-1 font-caps tracking-[0.3em] text-gold">2PM</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const SHOTS: Shot[] = [
  { src: galleryCouple.url, alt: "Mide and Mary smiling together outdoors" },
  { src: gallerySelfie.url, alt: "Mide taking a selfie with Mary by the doorway" },
  { src: galleryTogether.url, alt: "Mide and Mary posing together for a close-up selfie" },
  { src: galleryMaryMide.url, alt: "Mary taking a selfie with Mide in the background" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const real = SHOTS.filter((s) => s.src);
  return (
    <section id="gallery" className="px-5 py-24">
      <SectionTitle eyebrow="Gallery" title="MIDE & MARY" />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4">
        {SHOTS.map((s, i) => (
          <Reveal key={s.src} delay={i * 80}>
            <Button variant="ghost" onClick={() => setOpen(i)} aria-label={`View photo ${i + 1}: ${s.alt}`} className="group block h-auto w-full overflow-hidden rounded-none border border-border p-1.5">
              <img src={s.src} alt={s.alt} loading="lazy" className="aspect-[9/16] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
            </Button>
          </Reveal>
        ))}
      </div>
      {open !== null && (
        <Lightbox shots={real} index={open} onClose={() => setOpen(null)} onNav={(d) => setOpen((o) => ((o ?? 0) + d + real.length) % real.length)} />
      )}
    </section>
  );
}

function Rsvp() {
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "guests", string>>>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const guests = Number(f.get("guests"));
    const errs: Partial<Record<"name" | "email" | "guests", string>> = {};
    if (name.length < 2) errs.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255) errs.email = "Please enter a valid email address";
    if (!guests || guests < 1 || guests > 10) errs.guests = "Between 1 and 10 guests";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const note = String(f.get("message") || "").trim();
    const msg = `Hello MIDE & MARY 💚\n\nI joyfully confirm my attendance at your Holy Matrimony on 19th December 2026.\n\nName: ${name}\nEmail: ${email}\nNumber of guests: ${guests}${note ? `\nMessage: ${note}` : ""}`;
    const url = whatsappUrl(msg);
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
    setDone(true);
  };

  const field = "w-full border-b border-input bg-transparent px-1 py-3 text-lg outline-none transition-colors focus:border-gold";
  return (
    <section id="rsvp" className="bg-secondary/60 px-5 py-24">
      <SectionTitle eyebrow="Kindly respond" title="RSVP" />
      <Reveal className="mx-auto max-w-xl">
        <p className="mb-10 text-center text-xl text-muted-foreground">We would be delighted to celebrate this special day with you. Kindly confirm your attendance.</p>
        <div className="border border-gold/50 bg-card p-6 shadow-luxe sm:p-10">
          {done ? (
            <div className="py-10 text-center">
              <Heart className="mx-auto h-10 w-10 text-gold" fill="currentColor" />
              <p className="mt-6 font-script text-4xl text-primary">Thank you!</p>
              <p className="mt-3 text-xl text-muted-foreground">WhatsApp has opened with your response — just tap Send to let us know.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6">
              <div>
                <label className="eyebrow text-primary/70" htmlFor="name">Full Name</label>
                <input id="name" name="name" className={field} autoComplete="name" maxLength={100} />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="eyebrow text-primary/70" htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" inputMode="email" className={field} autoComplete="email" maxLength={255} />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="eyebrow text-primary/70" htmlFor="guests">Number of Guests</label>
                <input id="guests" name="guests" type="number" min={1} max={10} defaultValue={1} className={field} />
                {errors.guests && <p className="mt-1 text-sm text-destructive">{errors.guests}</p>}
              </div>
              <div>
                <label className="eyebrow text-primary/70" htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message" rows={3} className={field} />
              </div>
              <button type="submit" className="btn-gold w-full"><Heart className="h-4 w-4" />Joyfully Accept</button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle className="h-4 w-4" />RSVP on WhatsApp</a>
          <div className="mt-8 flex flex-col items-center gap-3">
            {PHONES.map((p) => (
              <a key={p} href={`tel:${p}`} className="flex items-center gap-3 text-xl text-primary hover:text-gold">
                <Phone className="h-5 w-5 text-gold" />{formatPhone(p)}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function QrSection() {
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(`${window.location.origin}/#rsvp`), []);
  return (
    <section className="px-5 py-24 text-center">
      <SectionTitle eyebrow="Share the joy" title="SCAN TO RSVP" />
      <Reveal>
        <div className="mx-auto inline-block border border-gold bg-card p-5 shadow-luxe">
          {url ? <QRCodeSVG value={url} size={200} fgColor="var(--foreground)" bgColor="var(--card)" level="M" /> : <div className="h-[200px] w-[200px]" />}
        </div>
        <p className="mt-4 text-muted-foreground">Point your phone camera here to open the RSVP</p>
      </Reveal>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-secondary/60 px-5 py-24">
      <SectionTitle eyebrow="The venue" title="WHERE TO FIND US" />
      <Reveal className="mx-auto max-w-4xl text-center">
        <MapPin className="mx-auto h-8 w-8 text-gold" />
        <p className="mx-auto mt-4 max-w-xl text-xl leading-relaxed">{VENUE}</p>
        <div className="mt-8 overflow-hidden border border-gold/60 p-1.5 shadow-luxe">
          <iframe title="Venue map" src={MAPS_EMBED} className="h-72 w-full sm:h-96" loading="lazy" />
        </div>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-gold mt-8"><MapPin className="h-4 w-4" />Get Directions</a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine-radial px-5 py-20 text-center">
      <Branch className="absolute -left-6 bottom-0 w-28 rotate-180 opacity-50" />
      <Branch className="absolute -right-6 bottom-0 w-28 rotate-180 -scale-x-100 opacity-50" />
      <img src={logo.url} alt="MiMa 2026" className="mx-auto w-28" />
      <p className="mt-6 font-caps text-2xl tracking-[0.3em] text-ivory">MIDE <span className="font-script tracking-normal text-gold-foil">&amp;</span> MARY</p>
      <p className="mt-3 font-script text-4xl text-gold-foil">Forever begins here.</p>
      <p className="eyebrow mt-4 text-ivory/80">19th December 2026</p>
      <Divider className="my-8" />
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
        {PHONES.map((p) => (
          <a key={p} href={`tel:${p}`} className="flex items-center gap-2 text-lg text-ivory/90 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{formatPhone(p)}</a>
        ))}
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Intro />
      <Nav />
      <Hero />
      <PrivateNotice />
      <CountdownBand />
      <Story />
      <CoupleBiographies />
      <Details />
      <InviteCard />
      <Gallery />
      <Rsvp />
      <Gifts />
      <QrSection />
      <Location />
      <Footer />
      <MusicButton />
    </main>
  );
}
