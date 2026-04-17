import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/insights/")({
  component: InsightsPage,
  head: () => ({
    meta: [
      { title: "Insights — Notes on Building, Design & Materials | Jaffa Group" },
      {
        name: "description",
        content:
          "Field notes on planning, designing, and building custom luxury homes in Park City and the Wasatch Back.",
      },
      { property: "og:title", content: "Insights — Jaffa Group" },
      {
        property: "og:description",
        content: "Field notes on planning, designing, and building custom luxury homes.",
      },
    ],
  }),
});

function InsightsPage() {
  const [feature, ...rest] = posts;

  return (
    <SiteShell>
      <section className="pt-40 pb-16 lg:pt-48 bg-background">
        <div className="container-editorial">
          <p className="eyebrow animate-fade-up">Insights</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl animate-fade-up delay-100">
            Field notes from <span className="italic text-gold">the studio.</span>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            Long-form writing on planning, design, materials, and the craft of
            building well in the mountains.
          </p>
        </div>
      </section>

      {/* Feature post */}
      <section className="bg-background pb-16 lg:pb-24">
        <div className="container-editorial">
          <Link
            to="/insights/$slug"
            params={{ slug: feature.slug }}
            className="group grid gap-10 lg:grid-cols-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7 relative aspect-[5/4] overflow-hidden bg-mist">
              <img
                src={feature.cover}
                alt={feature.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Featured · {feature.category}
              </p>
              <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.1] group-hover:text-gold transition-colors">
                {feature.title}
              </h2>
              <p className="mt-6 font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                {feature.excerpt}
              </p>
              <p className="mt-8 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {feature.date} · {feature.readTime}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background py-16 lg:py-24 border-t border-border">
        <div className="container-editorial grid gap-12 md:grid-cols-2">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/insights/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-6 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                {p.category}
              </p>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
                {p.excerpt}
              </p>
              <p className="mt-5 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {p.date} · {p.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Have a <span className="italic text-gold">project in mind?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors"
          >
            Start the conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
