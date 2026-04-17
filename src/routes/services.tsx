import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import detailImg from "@/assets/detail-materials.jpg";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Design–Build, Construction, Interiors | Jaffa Group" },
      {
        name: "description",
        content:
          "Jaffa Group provides end-to-end design-build, custom construction, interiors, millwork, and renovation services for luxury mountain homes.",
      },
      { property: "og:title", content: "Services — Jaffa Group" },
      {
        property: "og:description",
        content: "End-to-end design-build, construction, and interior services.",
      },
      { property: "og:image", content: detailImg },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Design–Build",
    body: "A single accountable team coordinating architecture, engineering, interiors, and construction from concept through final walk-through. Faster decisions, fewer surprises, one source of truth.",
    bullets: ["Architectural coordination", "Budget alignment from day one", "Single point of accountability"],
  },
  {
    n: "02",
    title: "Custom Construction",
    body: "Ground-up homes built by a tightly held crew of specialists. Every joint, edge, and reveal is planned in shop drawings before it reaches the field.",
    bullets: ["Pre-construction planning", "Shop-drawn detailing", "On-site project leadership"],
  },
  {
    n: "03",
    title: "Interiors & Millwork",
    body: "In-house cabinetry, paneling, and material specification ensure interiors arrive seamless. We design and build the joinery that defines a room.",
    bullets: ["Custom cabinetry & paneling", "Material & finish specification", "Lighting coordination"],
  },
  {
    n: "04",
    title: "Renovation",
    body: "Surgical updates to existing homes, treated with the same rigor as new construction. Ideal for kitchens, primary suites, and full-floor renovations.",
    bullets: ["Whole-home renovation", "Kitchen & bath", "Additions & expansions"],
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 bg-background">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-fade-up">Services</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] animate-fade-up delay-100">
              One studio.<br />
              <span className="italic text-gold">Every discipline.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Jaffa Group operates as a single integrated team — designers,
              builders, and craftspeople under one roof. The result is a home
              with no seams between intention and execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-36">
        <div className="container-editorial space-y-px bg-border">
          {services.map((s, i) => (
            <div
              key={s.n}
              className="group bg-background grid gap-8 md:grid-cols-12 py-12 lg:py-20 px-2 md:px-8 transition-colors duration-500 hover:bg-ink hover:text-bone"
            >
              <div className="md:col-span-2">
                <p className="font-serif text-3xl text-gold">{s.n}</p>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="font-sans text-base leading-relaxed text-muted-foreground group-hover:text-bone/75 transition-colors">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 font-sans text-sm text-foreground/85 group-hover:text-bone/85 transition-colors"
                    >
                      <span className="h-px w-4 bg-gold" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              {i === services.length - 1 ? null : null}
            </div>
          ))}
        </div>
      </section>

      {/* Materials feature */}
      <section className="relative bg-ink text-bone overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src={project2}
              alt="Interior craft of Jaffa Group home"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="container-editorial py-20 lg:py-32 lg:px-16 flex flex-col justify-center">
            <p className="eyebrow text-bone/60">Craft</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              Built by people who <span className="italic text-gold">care about the joint.</span>
            </h2>
            <p className="mt-8 font-sans text-base md:text-lg text-bone/75 leading-relaxed max-w-lg">
              We keep our crews small and long-tenured so that the standards
              we hold for one project become the standards we hold for the next.
            </p>
            <Link to="/team" className="mt-10 link-gold text-bone w-fit">
              Meet the team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Ready to brief us on <span className="italic text-gold">your project?</span>
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
