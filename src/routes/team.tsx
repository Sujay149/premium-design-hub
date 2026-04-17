import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team — Jaffa Group" },
      {
        name: "description",
        content:
          "Meet the leadership and craftspeople behind Jaffa Group, a Park City luxury home builder with sixteen years building in the Wasatch Back.",
      },
      { property: "og:title", content: "Team — Jaffa Group" },
      {
        property: "og:description",
        content: "The people behind Jaffa Group's design-build practice.",
      },
    ],
  }),
});

const team = [
  { name: "Daniel Jaffa", role: "Founder & Principal", years: "Since 2008" },
  { name: "Eliana Vasquez", role: "Director of Design", years: "Since 2014" },
  { name: "Marcus Hale", role: "Construction Manager", years: "Since 2012" },
  { name: "Naomi Iverson", role: "Head of Interiors", years: "Since 2017" },
  { name: "Theodore Lin", role: "Architecture Liaison", years: "Since 2019" },
  { name: "Helena Park", role: "Client Experience", years: "Since 2020" },
];

const values = [
  {
    title: "Quiet craftsmanship",
    body: "We measure ourselves by the work that doesn't call attention to itself — the seamless reveal, the disappearing door, the joint that holds for decades.",
  },
  {
    title: "Single accountability",
    body: "One team owns the home from sketch to handover. No finger-pointing, no gaps between disciplines.",
  },
  {
    title: "Long relationships",
    body: "Most of our clients refer the next one. Most of our trades have been with us a decade. That is the result we are most proud of.",
  },
];

function TeamPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-16 lg:pt-48 bg-background">
        <div className="container-editorial">
          <p className="eyebrow animate-fade-up">The Team</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl animate-fade-up delay-100">
            A small studio of <span className="italic text-gold">long-tenured</span> people.
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Sixteen years in, Jaffa Group remains intentionally small.
            Leadership stays close to every project, and most of the craftspeople
            who built our first homes are still here today.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-editorial grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-background p-8 lg:p-10 group hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              <div className="aspect-[4/5] mb-6 bg-mist relative overflow-hidden group-hover:bg-charcoal transition-colors duration-500">
                {/* Initial-based portrait placeholder, premium typographic treatment */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[8rem] leading-none text-foreground/15 group-hover:text-gold/60 transition-colors duration-500">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                {m.years}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{m.name}</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground group-hover:text-bone/70 transition-colors">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24 lg:py-32">
        <div className="container-editorial">
          <p className="eyebrow">Values</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            How we <span className="italic text-gold">work.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((v) => (
              <div key={v.title} className="border-t border-foreground/15 pt-8">
                <h3 className="font-serif text-2xl md:text-3xl">{v.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Let&rsquo;s talk about <span className="italic text-gold">your home.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors"
          >
            Start Your Build <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
