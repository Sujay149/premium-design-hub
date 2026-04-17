import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import sketchImg from "@/assets/process-sketch.jpg";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Our Process — Start Your Build | Jaffa Group" },
      {
        name: "description",
        content:
          "A measured, four-phase process from discovery to handover. How Jaffa Group designs and builds custom luxury homes in Park City.",
      },
      { property: "og:title", content: "Our Process — Jaffa Group" },
      {
        property: "og:description",
        content: "Discovery, design, build, handover — a calm, considered path to your home.",
      },
      { property: "og:image", content: sketchImg },
      { name: "twitter:image", content: sketchImg },
    ],
  }),
});

const phases = [
  {
    n: "I.",
    title: "Discovery",
    duration: "4–8 weeks",
    body: "We meet, walk the site, and define the brief. Feasibility, orientation, budget framing, and the long list of constraints that shape what's possible.",
    deliverables: ["Site analysis", "Working budget range", "Brief & program", "Schedule outline"],
  },
  {
    n: "II.",
    title: "Design",
    duration: "4–8 months",
    body: "Architecture, interiors, and engineering develop in lockstep. We move from massing to detailed shop drawings, with budget tracked at every milestone.",
    deliverables: ["Schematic design", "Design development", "Material specification", "Construction documents"],
  },
  {
    n: "III.",
    title: "Build",
    duration: "14–24 months",
    body: "Construction is led by a dedicated in-house project lead. Weekly owner updates, photographic logs, and a clear chain of decision-making throughout.",
    deliverables: ["Site preparation", "Vertical construction", "Interiors & millwork", "Punch & pre-handover"],
  },
  {
    n: "IV.",
    title: "Handover",
    duration: "Ongoing",
    body: "We don't disappear at handover. A documented warranty period, a one-year walk-through, and a service relationship for the life of the home.",
    deliverables: ["Owner manual", "30-day, 6-month & 12-month walks", "Warranty service", "Ongoing care"],
  },
];

function ProcessPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 bg-background">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-fade-up">Process</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] animate-fade-up delay-100">
              From first sketch <br />
              <span className="italic text-gold">to first night.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
              A custom home is the longest, most complex purchase most owners
              will ever make. Our process is built to make that journey calm,
              transparent, and free of unpleasant surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="bg-background">
        <div className="container-editorial">
          <div className="relative aspect-[16/9] overflow-hidden bg-mist">
            <img
              src={sketchImg}
              alt="Architectural sketch on a walnut desk"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container-editorial">
          <div className="space-y-px bg-border">
            {phases.map((p) => (
              <div
                key={p.n}
                className="bg-background grid gap-8 md:grid-cols-12 py-12 lg:py-16 px-2 md:px-8"
              >
                <div className="md:col-span-2">
                  <p className="font-serif text-4xl text-gold">{p.n}</p>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-4 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {p.duration}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="font-sans text-base leading-relaxed text-foreground/85">
                    {p.body}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-y-2 gap-x-6">
                    {p.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 font-sans text-sm text-muted-foreground"
                      >
                        <span className="h-px w-4 bg-gold" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">What to Expect</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              Calm, considered, <span className="italic text-gold">communicated.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 grid gap-8">
            {[
              { h: "Weekly written updates", p: "A short Friday note on progress, decisions needed, and what's coming next." },
              { h: "One point of contact", p: "Your project lead is available, knowledgeable, and accountable for the whole build." },
              { h: "Open-book pricing", p: "Transparent budgets and change orders. You always know where the project stands financially." },
            ].map((b) => (
              <div key={b.h} className="border-t border-foreground/15 pt-6">
                <h3 className="font-serif text-2xl">{b.h}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone py-24 lg:py-32">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Ready to begin <span className="italic text-gold">discovery?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold text-ink px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold-soft transition-colors"
          >
            Start Your Build <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
