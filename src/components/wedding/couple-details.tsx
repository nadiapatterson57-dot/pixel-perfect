import { useState } from "react";
import { Check, Copy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "@/components/wedding/ornaments";

const BIOGRAPHIES = [
  {
    label: "About the Bride",
    name: "Mary",
    paragraphs: [
      "Mary is a passionate fashion professional with a deep love for creativity, style, and excellence. With years of experience in the fashion world, she has had the privilege of working with notable personalities and gaining valuable experience in the industry.",
      "She has a keen eye for style and understands the art of fashion, from creativity and presentation to the details that make every look stand out. Her passion, dedication, and knowledge have made fashion an important part of her journey.",
      "Beyond her career, Mary is a woman who values love, family, faith, and meaningful relationships. She is excited to begin this beautiful new chapter of her life with Mide, building a home filled with love, purpose, and shared dreams.",
    ],
  },
  {
    label: "About the Groom",
    name: "Mide Brown",
    paragraphs: [
      "Mide Brown is a gospel saxophonist, music minister, and worshipper whose life is deeply rooted in faith, purpose, and a passion for God.",
      "Through his music, Mide has found a way to express what words sometimes cannot. His greatest desire is to use his sound to glorify God, touch hearts, and bless lives across and beyond Nigeria.",
      "But beyond the music and the ministry is a man who believes deeply in love, family, friendship, and building a life with purpose.",
      "And now, after walking his journey alone for a while, he is grateful to God for the woman with whom he gets to walk the rest of the way.",
      "On December 19, 2026, Mide will marry his best friend, his love, and his answered prayer.",
    ],
  },
];

export function CoupleBiographies() {
  return (
    <section id="couple" className="bg-secondary/60 px-5 py-24">
      <SectionTitle eyebrow="Faith, love & purpose" title="MEET THE COUPLE" />
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        {BIOGRAPHIES.map((person, i) => (
          <Reveal key={person.name} delay={i * 150}>
            <article className="border-t border-border pt-8">
              <p className="eyebrow text-primary/70">{person.label}</p>
              <h3 className="mb-7 mt-4 font-script text-5xl text-primary">{person.name}</h3>
              <div className="space-y-5 text-xl leading-relaxed text-muted-foreground">
                {person.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Gifts() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copyAccount() {
    try {
      await navigator.clipboard.writeText("2004743928");
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="gifts" className="px-5 py-24">
      <SectionTitle eyebrow="With grateful hearts" title="A GIFT OF LOVE" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <Heart className="mx-auto h-7 w-7 text-primary" />
        <p className="mt-6 font-script text-4xl leading-snug text-primary">Your presence is our greatest gift.</p>
        <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-muted-foreground">
          Your love, prayers, and support mean so much to us. If you wish to bless our new beginning with a gift, we would receive it with grateful hearts. Thank you for being part of our journey and helping us build a beautiful tomorrow together.
        </p>
        <dl className="mt-10 divide-y divide-border border-y border-border text-left">
          <div className="flex flex-wrap items-center justify-between gap-3 py-5"><dt className="eyebrow text-muted-foreground">Bank Name</dt><dd className="font-caps text-lg text-primary">FCMB</dd></div>
          <div className="flex flex-wrap items-center justify-between gap-3 py-5"><dt className="eyebrow text-muted-foreground">Account Name</dt><dd className="text-2xl text-primary">The Revel Music</dd></div>
          <div className="flex flex-wrap items-center justify-between gap-3 py-5">
            <dt className="eyebrow text-muted-foreground">Account Number</dt>
            <dd className="flex items-center gap-3"><span className="select-all text-2xl tabular-nums text-primary">2004743928</span><Button type="button" variant="ghost" size="icon" onClick={copyAccount} aria-label="Copy account number" title="Copy account number">{status === "copied" ? <Check /> : <Copy />}</Button></dd>
          </div>
        </dl>
        <p role="status" className="mt-3 min-h-6 text-base text-muted-foreground">{status === "copied" ? "Account number copied." : status === "error" ? "Please select and copy the account number." : ""}</p>
      </Reveal>
    </section>
  );
}