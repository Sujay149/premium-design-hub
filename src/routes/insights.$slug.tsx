import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { getPost, posts, type Post } from "@/lib/posts";

export const Route = createFileRoute("/insights/$slug")({
  component: PostPage,
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Insights — Jaffa Group" }] };
    return {
      meta: [
        { title: `${p.title} — Jaffa Group` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: `${p.title} — Jaffa Group` },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-editorial pt-40 pb-32 text-center">
        <p className="eyebrow justify-center inline-flex">404</p>
        <h1 className="mt-6 font-serif text-5xl">Article not found</h1>
        <Link to="/insights" className="mt-10 inline-block link-gold">
          Back to insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SiteShell>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <SiteShell>
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 bg-background">
        <div className="container-editorial max-w-4xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-gold mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Insights
          </Link>
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
            {post.category} · {post.date} · {post.readTime}
          </p>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] animate-fade-up">
            {post.title}
          </h1>
          <p className="mt-8 font-sans text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-up delay-100">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-background pb-16">
        <div className="container-editorial">
          <div className="relative aspect-[16/9] overflow-hidden bg-mist">
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover"
              width={1600}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-editorial max-w-3xl space-y-8 font-serif text-xl md:text-2xl leading-[1.55] text-foreground/90">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] max-w-2xl">
            Building in the mountains? <span className="italic text-gold">Let's talk.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors"
          >
            Start the conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* More */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-5xl">More notes</h2>
            <Link to="/insights" className="link-gold hidden md:inline-flex">
              All insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {more.map((p) => (
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
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                  {p.category}
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
