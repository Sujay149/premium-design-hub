import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Jaffa Group" },
      {
        name: "description",
        content:
          "A curated portfolio of custom luxury homes, renovations, and interiors by Jaffa Group across Park City and the Wasatch Back.",
      },
      { property: "og:title", content: "Portfolio — Jaffa Group" },
      {
        property: "og:description",
        content: "Cinematic mountain residences from Jaffa Group's design-build practice.",
      },
    ],
  }),
});

const filters = ["All", "Custom Home", "Renovation", "Interiors"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <SiteShell>
      <section className="pt-40 pb-16 lg:pt-48 bg-background">
        <div className="container-editorial">
          <p className="eyebrow animate-fade-up">Portfolio</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl animate-fade-up delay-100">
            Houses with <span className="italic text-gold">a sense of place.</span>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            A selection of completed and in-progress work across the Wasatch
            Back. Each project is documented with the same care it was built.
          </p>
        </div>
      </section>

      <section className="sticky top-16 lg:top-20 z-30 bg-background/90 backdrop-blur-md border-y border-border">
        <div className="container-editorial flex items-center gap-2 md:gap-6 overflow-x-auto py-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 px-4 py-2 font-sans text-[0.7rem] uppercase tracking-[0.22em] border transition-all ${
                active === f
                  ? "border-gold bg-gold text-ink"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto shrink-0 hidden md:inline font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {list.length} {list.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-editorial grid gap-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          {list.map((p, i) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i % 3 === 0 ? "md:mt-0" : "md:mt-12"}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <img
                  src={p.hero}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-bone/50 text-bone backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4" />
                </div>
                {p.status === "In Progress" && (
                  <span className="absolute left-5 top-5 bg-gold text-ink px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.25em]">
                    In Progress
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                    {p.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors">
                    {p.title}
                  </h2>
                </div>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground whitespace-nowrap">
                  {p.location} · {p.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
