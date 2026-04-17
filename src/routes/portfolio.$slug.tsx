import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Jaffa Group" }] };
    return {
      meta: [
        { title: `${p.title} — Jaffa Group` },
        { name: "description", content: p.blurb },
        { property: "og:title", content: `${p.title} — Jaffa Group` },
        { property: "og:description", content: p.blurb },
        { property: "og:image", content: p.hero },
        { name: "twitter:image", content: p.hero },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-editorial pt-40 pb-32 text-center">
        <p className="eyebrow justify-center inline-flex">404</p>
        <h1 className="mt-6 font-serif text-5xl">Project not found</h1>
        <Link to="/portfolio" className="mt-10 inline-block link-gold">
          Back to portfolio <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SiteShell>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone">
        <img
          src={project.hero}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/85" />
        <div className="relative h-full container-editorial flex flex-col justify-end pb-16 lg:pb-24">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-bone/70 hover:text-gold w-fit mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Portfolio
          </Link>
          <p className="eyebrow text-bone/80 animate-fade-up">
            {project.category} · {project.location}
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl animate-fade-up delay-100">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base md:text-lg text-bone/80 animate-fade-up delay-200">
            {project.blurb}
          </p>
        </div>
      </section>

      {/* Specs strip */}
      <section className="bg-ink text-bone border-t border-bone/10">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-bone/10">
          {project.specs.map((s) => (
            <div key={s.label} className="py-8 md:py-10 px-2 md:px-6 first:pl-0">
              <p className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                {s.label}
              </p>
              <p className="mt-3 font-serif text-xl md:text-2xl">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container-editorial grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">The Story</p>
            <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] italic text-gold">
              "Quietly built into the landscape, never imposed upon it."
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-sans text-base md:text-lg leading-relaxed text-foreground/85">
              {project.story}
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                  Scope
                </p>
                <ul className="mt-4 space-y-2 font-serif text-lg">
                  {project.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                  Status
                </p>
                <p className="mt-4 font-serif text-lg">{project.status}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background pb-24 lg:pb-36">
        <div className="container-editorial grid gap-6 md:grid-cols-12">
          {project.gallery.map((src, i) => {
            const layout = [
              "md:col-span-12 aspect-[16/9]",
              "md:col-span-7 aspect-[5/4]",
              "md:col-span-5 aspect-[5/4]",
              "md:col-span-12 aspect-[16/8]",
            ][i % 4];
            return (
              <div key={i} className={`relative overflow-hidden bg-mist ${layout}`}>
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Inspired by this home? <span className="italic text-gold">Begin yours.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors"
          >
            Start Your Build <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow">Continue</p>
              <h2 className="mt-5 font-serif text-3xl md:text-5xl">More projects</h2>
            </div>
            <Link to="/portfolio" className="link-gold hidden md:inline-flex">
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <img
                    src={p.hero}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                  {p.location}
                </p>
                <h3 className="mt-2 font-serif text-2xl group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
