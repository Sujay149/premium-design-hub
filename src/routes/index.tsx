import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { projects } from "@/lib/projects";
import heroImg from "@/assets/hero-home.jpg";
import detailImg from "@/assets/detail-materials.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jaffa Group — Custom Luxury Homes in Park City, Utah" },
      {
        name: "description",
        content:
          "Jaffa Group is a luxury custom home builder and design-build firm crafting cinematic mountain residences in Park City, Deer Valley, and Promontory.",
      },
      { property: "og:title", content: "Jaffa Group — Custom Luxury Homes" },
      {
        property: "og:description",
        content:
          "Cinematic, design-build luxury homes for Park City and the surrounding mountain communities.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <FeaturedStrip />
      <Ethos />
      <ServicesSummary />
      <Process />
      <Testimonial />
      <FinalCTA />
    </SiteShell>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.35}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Luxury custom mountain home at dusk in Park City, Utah"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/85" />
      </div>

      <div className="relative h-full container-editorial flex flex-col justify-end pb-24 lg:pb-32">
        <p className="eyebrow text-bone/80 animate-fade-up delay-100">
          Park City · Established 2008
        </p>
        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(2.75rem,7vw,6.75rem)] leading-[0.95] tracking-tight animate-fade-up delay-200">
          Custom homes <br />
          <span className="italic text-bone/95">made for the </span>
          <span className="italic text-gold">mountains.</span>
        </h1>
        <p className="mt-8 max-w-xl font-sans text-base md:text-lg text-bone/75 leading-relaxed animate-fade-up delay-300">
          A design-build firm crafting cinematic residences across Park City,
          Deer Valley, Promontory, and the Wasatch Back.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up delay-400">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] text-ink hover:bg-gold-soft transition-colors"
          >
            Start Your Build
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 border border-bone/40 px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] text-bone hover:border-gold hover:text-gold transition-colors"
          >
            View Portfolio
            <span className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 lg:right-12 hidden md:flex items-center gap-3 text-bone/60">
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px bg-bone/40 origin-top animate-pulse" />
      </div>
    </section>
  );
}

function FeaturedStrip() {
  const featured = projects.slice(0, 3);
  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              A portfolio of <span className="italic text-gold">considered</span> homes.
            </h2>
          </div>
          <Link to="/portfolio" className="link-gold">
            All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className={`group relative block overflow-hidden bg-mist ${
                i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-[5/4]"} overflow-hidden`}>
                <img
                  src={p.hero}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-bone">
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                    {p.category} · {p.location}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-bone/40 text-bone backdrop-blur-sm opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ethos() {
  return (
    <section className="bg-ink text-bone py-28 lg:py-40 overflow-hidden">
      <div className="container-editorial grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow text-bone/60">The Studio</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Architecture that <span className="italic text-gold">belongs</span> to its place.
          </h2>
          <p className="mt-8 font-sans text-base md:text-lg text-bone/70 leading-relaxed">
            For sixteen years, Jaffa Group has built the Wasatch Back's most
            considered residences. We work in close coordination with leading
            architects and interior designers — measuring success in light,
            material, and longevity rather than square footage.
          </p>
          <Link to="/team" className="mt-10 link-gold text-bone">
            About the studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[5/4] overflow-hidden">
            <img
              src={detailImg}
              alt="Detail of cedar, stone, and blackened steel materials"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-6 lg:-left-12 hidden md:block bg-bone text-ink p-8 lg:p-10 max-w-xs shadow-2xl">
            <p className="font-serif text-5xl text-gold">16</p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Years building<br />in the Wasatch Back
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSummary() {
  const items = [
    {
      n: "01",
      title: "Design–Build",
      body: "End-to-end coordination from architecture through final punch list.",
    },
    {
      n: "02",
      title: "Custom Construction",
      body: "Ground-up homes built to the highest tolerances of craft.",
    },
    {
      n: "03",
      title: "Interiors & Millwork",
      body: "In-house cabinetry and material specification for a unified result.",
    },
    {
      n: "04",
      title: "Renovation",
      body: "Surgical updates to existing homes with no compromise on quality.",
    },
  ];
  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            One partner. <span className="italic text-gold">Every detail.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((it) => (
            <div
              key={it.n}
              className="group bg-background p-8 lg:p-10 transition-colors duration-500 hover:bg-ink hover:text-bone"
            >
              <p className="font-serif text-sm text-gold">{it.n}</p>
              <h3 className="mt-6 font-serif text-2xl">{it.title}</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground group-hover:text-bone/70 transition-colors">
                {it.body}
              </p>
              <div className="mt-10 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>

        <Link to="/services" className="mt-12 inline-block link-gold">
          Explore services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "I.", title: "Discovery", body: "Site, brief, budget, and the people who will live here." },
    { n: "II.", title: "Design", body: "Architecture, interiors, and material decisions in lockstep." },
    { n: "III.", title: "Build", body: "Disciplined construction managed in-house from breaking ground to handover." },
  ];
  return (
    <section className="bg-mist py-24 lg:py-36">
      <div className="container-editorial">
        <p className="eyebrow">Our Process</p>
        <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
          A measured path from <span className="italic text-gold">first sketch</span> to first night.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-foreground/15 pt-8">
              <p className="font-serif text-3xl text-gold">{s.n}</p>
              <h3 className="mt-4 font-serif text-3xl">{s.title}</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="container-editorial max-w-5xl text-center">
        <p className="eyebrow justify-center inline-flex">Client</p>
        <blockquote className="mt-8 font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight">
          &ldquo;Working with Jaffa Group felt like collaborating with an
          atelier. <span className="italic text-gold">Every decision was
          considered</span>, and the home that emerged is more thoughtful than
          we knew to ask for.&rdquo;
        </blockquote>
        <p className="mt-10 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
          M. & R. Holloway · Deer Valley Residence
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      <div className="container-editorial py-28 lg:py-40 grid gap-12 lg:grid-cols-12 items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow text-bone/60">Begin</p>
          <h2 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.95]">
            Build something<br />
            <span className="italic text-gold">extraordinary.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 border border-bone/40 px-8 py-5 font-sans text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-colors"
          >
            Start Your Build
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
