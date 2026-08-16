import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import logo from "@/assets/sawali-logo.jpg";
import heroChai from "@/assets/hero-chai.jpg";
import kulhad from "@/assets/food/food-05.jpg";
import banner from "@/assets/food/food-06.jpg";
import g01 from "@/assets/gallery/gallery-01.jpg";
import g02 from "@/assets/gallery/gallery-02.jpg";
import g03 from "@/assets/gallery/gallery-03.jpg";
import g04 from "@/assets/gallery/gallery-04.jpg";
import g05 from "@/assets/gallery/gallery-05.jpg";
import g06 from "@/assets/gallery/gallery-06.jpg";
import g07 from "@/assets/gallery/gallery-07.jpg";
import g08 from "@/assets/gallery/gallery-08.jpg";
import g09 from "@/assets/gallery/gallery-09.jpg";
import g10 from "@/assets/gallery/gallery-10.jpg";
import g11 from "@/assets/gallery/gallery-11.jpg";
import g12 from "@/assets/gallery/gallery-12.jpg";
import g13 from "@/assets/gallery/gallery-13.jpg";
import g14 from "@/assets/gallery/gallery-14.jpg";
import g15 from "@/assets/gallery/gallery-15.jpg";
import g16 from "@/assets/gallery/gallery-16.jpg";
import g17 from "@/assets/gallery/gallery-17.jpg";
import g18 from "@/assets/gallery/gallery-18.jpg";
import g19 from "@/assets/gallery/gallery-19.jpg";
import g20 from "@/assets/gallery/gallery-20.jpg";
import g21 from "@/assets/gallery/gallery-21.jpg";
import g22 from "@/assets/gallery/gallery-22.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sawali Chaha | Tea & Snacks Franchise in Talwade, Pune" },
      {
        name: "description",
        content:
          "Sawali Chaha (सावली चहा) — tea & snacks brand since 2018 with 15 branches. Franchise, tea factory and tea powder manufacturing at Canbe Chowk, Talwade IT Park, Pune.",
      },
      { property: "og:title", content: "Sawali Chaha | Tea & Snacks Franchise in Talwade, Pune" },
      {
        property: "og:description",
        content:
          "Sawali Chaha (सावली चहा) — tea & snacks brand since 2018 with 15 branches. Franchise, tea factory and tea powder manufacturing at Canbe Chowk, Talwade IT Park, Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "8390912323";
const WHATSAPP = "https://wa.me/918390912323?text=" + encodeURIComponent("Hello Sawali Chaha, I would like to know more about your franchise.");
const INSTAGRAM = "https://www.instagram.com/sawali_caha_";

const gallery = [g01, g02, g03, g04, g05, g06, g07, g08, g09, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22];

const menu = [
  { name: "चहा", en: "Chaha", price: 12 },
  { name: "कॉफी", en: "Coffee", price: 15 },
  { name: "लेमन टी", en: "Lemon Tea", price: 15 },
  { name: "बन मस्का", en: "Bun Maska", price: 25 },
  { name: "वडापाव", en: "Vada Pav", price: 18 },
  { name: "पॅटिस", en: "Patties", price: 20 },
  { name: "कांदाभजी", en: "Kanda Bhaji", price: 35 },
  { name: "बटाटा भजी", en: "Batata Bhaji", price: 40 },
  { name: "मिसळ पाव", en: "Misal Pav", price: 80 },
  { name: "मटकी भेळ", en: "Matki Bhel", price: 50 },
];


function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Sawali Chaha logo" className="h-10 w-auto" width={587} height={345} />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            
            <a href="#menu" className="transition-colors hover:text-primary">Menu</a>
            <a href="#gallery" className="transition-colors hover:text-primary">Gallery</a>
            <a href="#franchise" className="transition-colors hover:text-primary">Franchise</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-[1.03]"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroChai}
          alt="Sawali Chaha chai being poured into glasses"
          className="animate-ken-burns absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-maroon/80" />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <div className="relative inline-block rounded-3xl bg-cream/95 px-8 py-6 shadow-lift animate-fade-in-up">
            {/* Steam wisps rising off the logo card, tea-themed and purely decorative */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-6 left-1/2 flex -translate-x-1/2 gap-3">
              <span className="steam-wisp h-8 w-1.5 rounded-full bg-maroon-foreground/40 blur-[2px]" style={{ animationDelay: "0s" }} />
              <span className="steam-wisp h-10 w-1.5 rounded-full bg-maroon-foreground/40 blur-[2px]" style={{ animationDelay: "0.7s" }} />
              <span className="steam-wisp h-8 w-1.5 rounded-full bg-maroon-foreground/40 blur-[2px]" style={{ animationDelay: "1.4s" }} />
            </div>
            <img
              src={logo}
              alt="Sawali Chaha — Tea & Snacks"
              width={587}
              height={345}
              className="h-28 w-auto md:h-44"
            />
          </div>

          <p className="animate-fade-in-up mt-8 text-2xl font-semibold text-maroon-foreground md:text-3xl" style={{ animationDelay: "120ms" }}>
            दर्जेदार चहाची अनुभूती — since 2018
          </p>
          <p className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-sm text-maroon-foreground/80 md:text-base" style={{ animationDelay: "220ms" }}>
            A Maharashtrian tea &amp; snacks brand from Talwade IT Park, Pune — now 15 branches strong,
            with our own tea factory and tea powder manufacturing.
          </p>

          <div className="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: "320ms" }}>
            <a
              href="#franchise"
              className="shimmer-btn rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.04]"
            >
              Take a Franchise
            </a>
            <a
              href="#menu"
              className="rounded-full border border-maroon-foreground/40 px-7 py-3 font-semibold text-maroon-foreground transition-colors hover:bg-maroon-foreground/10 hover:scale-[1.04]"
            >
              See the Menu
            </a>
          </div>

          <dl className="animate-fade-in-up mx-auto mt-12 grid max-w-sm grid-cols-2 gap-4" style={{ animationDelay: "420ms" }}>
            {[
              { value: 15, label: "Branches" },
              { value: 2018, label: "Founded" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-maroon-foreground/15 bg-maroon-foreground/10 px-3 py-5 backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                <dt className="text-3xl font-bold text-maroon-foreground md:text-4xl">
                  <AnimatedCounter value={s.value} />
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-maroon-foreground/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <h2 className="section-rule text-3xl md:text-4xl">आमची सावली</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Sawali Chaha was founded in 2018 by <strong className="text-foreground">Prasad Ajabe</strong> as one
              small stall at Canbe Chowk, Talwade IT Park — a shaded spot where IT staff, students
              and shopkeepers stopped for a strong, honest cup.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              That one cup became a system: our own tea factory, our own tea powder blend, and 15
              branches serving the same kadak chaha, vada pav and misal at the same fair price.
            </p>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-secondary px-6 py-5 text-lg font-semibold text-secondary-foreground">
              "चहाचा प्रत्येक घोट… आनंदाची नवी सुरुवात."
            </blockquote>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <img
              src={kulhad}
              alt="Cutting chai with lemon and mint at Sawali Chaha"
              loading="lazy"
              width={1200}
              height={1600}
              className="animate-float-slow w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>


      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal direction="left">
            <img
              src={banner}
              alt="Sawali vada pav with green chilli"
              loading="lazy"
              width={1200}
              height={1600}
              className="w-full rounded-3xl object-cover shadow-warm"
            />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <h2 className="section-rule text-3xl md:text-4xl">मेनू</h2>
            <ul className="mt-8 divide-y divide-border">
              {menu.map((m, i) => (
                <li
                  key={m.en}
                  className="animate-fade-in-up flex items-baseline gap-3 py-3 transition-colors hover:bg-secondary/40"
                  style={{ animationDelay: `${180 + i * 60}ms` }}
                >
                  <span className="text-lg font-semibold">{m.name}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{m.en}</span>
                  <span className="mx-2 flex-1 border-b border-dashed border-border" />
                  <span className="text-lg font-bold text-primary">₹{m.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Prices may vary slightly by branch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-rule text-3xl md:text-4xl">गॅलरी</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Our outlets, our team and our branch openings across Pune.
              </p>
            </div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-[1.03]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z" />
              </svg>
              Follow on Instagram
            </a>
          </div>
          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>a]:mb-4">
            {gallery.map((img, i) => (
              <a
                key={img}
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-in-up group block break-inside-avoid overflow-hidden rounded-2xl shadow-warm"
                style={{ animationDelay: `${(i % 8) * 70}ms` }}
              >
                <img
                  src={img}
                  alt={`Sawali Chaha outlet and team photo ${i + 1}`}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise */}
      <section id="franchise" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Own a Sawali Chaha Franchise</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            15 branches are already running on this model. We handle the blend, the branding and the
            training — you run a busy tea counter in your own area.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              ["Complete Setup", "Outlet design, equipment list and menu boards."],
              ["Staff Training", "Chaha making, snacks prep and counter handling."],
              ["Tea Supply", "Direct tea powder supply from our own factory."],
              ["Brand Support", "Signage, packaging and marketing material."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="h-full rounded-2xl bg-card p-5 shadow-warm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <h3 className="text-base">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-block rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.04]"
            >
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-primary px-8 py-3.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-2xl bg-cream px-4 py-3 shadow-lift">
              <img src={logo} alt="Sawali Chaha" loading="lazy" width={587} height={345} className="h-14 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/85">
              Sawali Chaha, based out of Talwade, Pune, has been winning the hearts of tea lovers
              since 2018. Backed by our own tea factory and 15 franchise branches, we are brewing
              Maharashtra's most darjedar chai — one glass at a time.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary-foreground/25"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z" />
              </svg>
              @sawali_caha_
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["Home", "#top"],
                ["Menu", "#menu"],
                ["Gallery", "#gallery"],
                ["Franchise", "#franchise"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-primary-foreground/90 transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Menu</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-primary-foreground/90">
              {[
                "Tea",
                "Jaggery Tea",
                "Lemon Tea",
                "Black Tea",
                "Ginger Tea",
                "Hot Coffee",
                "Cold Coffee",
                "Spongy Cake",
                "Cream Roll",
                "Vada Pav",
                "Patties",
                "Kanda Bhaji",
                "Batata Bhaji",
                "Misal Pav",
                "Matki Bhel",
                "Bun Maska",
              ].map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Get in Touch</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-maroon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <span className="text-primary-foreground/90">Canbe Chowk, Talwade IT Park, Pune, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-maroon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.2 21 3 12.8 3 2.99a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
                  </svg>
                </span>
                <a href={`tel:${PHONE}`} className="transition-colors hover:text-gold">+91 {PHONE}</a>
              </li>
            </ul>
            <div className="mt-5 overflow-hidden rounded-xl border border-primary-foreground/25 bg-primary-foreground/10">
              <iframe
                title="Sawali Chaha location map — Canbe Chowk, Talwade IT Park, Pune"
                src="https://maps.google.com/maps?q=Canbe%20Chowk%2C%20Talwade%20IT%20Park%2C%20Pune&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-48 w-full border-0"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Canbe+Chowk,+Talwade+IT+Park,+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-gold underline underline-offset-4"
            >
              Open in Maps
            </a>
          </div>

        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-primary-foreground/20 px-5 pt-6 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Sawali Chaha. All rights reserved.
        </div>
      </footer>


      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call Sawali Chaha"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-maroon shadow-lift transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.2 21 3 12.8 3 2.99a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
          </svg>
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sawali Chaha on WhatsApp"
          className="animate-float flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.08-1.82-.11a16.6 16.6 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.37-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.79-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.69.8 1.98.94.29.15.49.22.56.34.07.13.07.73-.17 1.41Z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
