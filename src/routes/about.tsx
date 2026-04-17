import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import aboutImg from "@/assets/about-craft.jpg";
import detailImg from "@/assets/detail-materials.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Jaffa Group | Park City Custom Home Builder" },
      {
        name: "description",
        content:
          "Sixteen years of design-build craft in Park City. The story, values, and people behind Jaffa Group's luxury custom homes.",
      },
      { property: "og:title", content: "About — Jaffa Group" },
      {
        property: "og:description",
        content: "The story, values, and craft behind Jaffa Group.",
      },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
});

const values = [
  {
    n: "01",
    title: "Craft Above All",
    body: "We measure success in the joinery — the reveals, the tolerances, the things you'd only notice if they were wrong.",
  },
  {
    n: "02",
    title: "Quiet Luxury",
    body: "We build homes that don't shout. Their value is found in light, proportion, material, and longevity.",
  },
  {
    n: "03",
    title: "Single Accountability",
    body: "One team is responsible from concept to handover. No finger-pointing, no gaps in the seam.",
  },
  {
    n: "04",
    title: "Built to Last",
    body: "Decisions are made with a thirty-year horizon. Materials, mechanicals, and detailing all answer to it.",
  },
];

const stats = [
  { value: "16", label: "Years in Park City" },
  { value: "60+", label: "Homes Delivered" },
  { value: "100%", label: "Repeat or Referred" },
  { value: "12", label: "In-House Craftsmen" },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 bg-background">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-fade-up">About</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] animate-fade-up delay-100">
              A studio shaped by <span className="italic text-gold">these mountains.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Jaffa Group was founded in Park City in 2008 with a single
              conviction: that the best custom homes are made when design and
              construction belong to the same team. Sixteen years on, the
              conviction has only deepened.
            </p>
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="bg-background">
        <div className="container-editorial">
          <div className="relative aspect-[16/9] overflow-hidden bg-mist">
            <img
              src={aboutImg}
              alt="Jaffa Group team reviewing plans on site at dusk"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1600}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container-editorial grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">Our Story</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground/85">
            <p>
              The studio began with a small team and a borrowed shop in Old
              Town, building one home at a time and refusing the shortcuts that
              had become standard in the local market.
            </p>
            <p>
              Today we operate from a purpose-built studio and millwork shop
              just outside Park City, with designers, project leads, and
              craftspeople under one roof. The approach has not changed: one
              project at a time, every decision held to the same standard.
            </p>
            <p>
              We work most often with discerning owners who care about the long
              arc of a home — how it sits on its land, how it ages, how it
              feels on a Tuesday in January. Those owners are why we do this.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 lg:py-36">
        <div className="container-editorial">
          <p className="eyebrow">Values</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            What we hold to, <span className="italic text-gold">always.</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
            {values.map((v) => (
              <div key={v.n} className="bg-mist p-10 lg:p-12">
                <p className="font-serif text-3xl text-gold">{v.n}</p>
                <h3 className="mt-6 font-serif text-3xl">{v.title}</h3>
                <p className="mt-5 font-sans text-base leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / proof */}
      <section className="bg-ink text-bone py-24 lg:py-32">
        <div className="container-editorial">
          <p className="eyebrow text-bone/60">By the Numbers</p>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink p-8 lg:p-12">
                <p className="font-serif text-5xl lg:text-7xl text-gold">{s.value}</p>
                <p className="mt-4 font-sans text-xs uppercase tracking-[0.25em] text-bone/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability + craft */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container-editorial grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={detailImg}
                alt="Detail of materials"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Sustainability</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              Built to <span className="italic text-gold">outlast trends.</span>
            </h2>
            <p className="mt-8 font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              The most sustainable home is the one that doesn't need to be
              renovated. We specify durable, repairable, low-VOC materials and
              high-performance envelopes that quietly outperform code by
              substantial margins.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Want to meet the studio?
          </h2>
          <Link
            to="/team"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ink transition-colors"
          >
            Meet the team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
