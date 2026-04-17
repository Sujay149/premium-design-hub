import blogMaterials from "@/assets/blog-materials.jpg";
import blogMountain from "@/assets/blog-mountain.jpg";
import blogKitchen from "@/assets/blog-kitchen.jpg";

export type Post = {
  slug: string;
  title: string;
  category: "Planning" | "Design" | "Materials" | "Construction";
  excerpt: string;
  cover: string;
  readTime: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "planning-a-mountain-home",
    title: "Planning a Mountain Home: The First Six Months",
    category: "Planning",
    excerpt:
      "What every owner should know before breaking ground on a custom home in Park City — from lot due diligence to budget framing.",
    cover: blogMountain,
    readTime: "7 min read",
    date: "March 2025",
    body: [
      "The most consequential decisions on a custom home are made before a single shovel hits the ground. The first six months of any project are spent answering hard questions about site, brief, and budget — and the more disciplined that period is, the smoother the build that follows.",
      "We begin every engagement with a feasibility study: orientation, slope, snow load, access, utilities, view corridors, and the realistic envelope your jurisdiction will allow. The goal is to surface every constraint while options are still cheap to change.",
      "From there we frame a working budget against the brief — not a wish list, but a calibrated range tied to current Park City market conditions. This is where we separate the must-haves from the nice-to-haves, and where the architecture begins to take its real shape.",
      "The result, six months in, is a project that knows itself: a clear site strategy, a defensible budget, a design language with conviction, and a schedule grounded in reality. That is the foundation everything else stands on.",
    ],
  },
  {
    slug: "the-quiet-language-of-materials",
    title: "The Quiet Language of Materials",
    category: "Materials",
    excerpt:
      "How a restrained palette of cedar, stone, and blackened steel becomes the difference between a house and a home.",
    cover: blogMaterials,
    readTime: "5 min read",
    date: "February 2025",
    body: [
      "A material palette is the most personal decision in a home, and the most durable. The right combination ages with grace; the wrong one starts to feel dated the day the keys are handed over.",
      "We tend to start with three or four anchor materials and resist the urge to add. Cedar siding, board-formed concrete, blackened steel, and a single quarried stone will carry a home further than a dozen finishes ever could.",
      "The work is in the joinery — the reveal between two materials, the chamfer at a corner, the way a stair tread meets the wall. These are the details that read as quiet luxury for decades.",
    ],
  },
  {
    slug: "kitchens-that-age-well",
    title: "Kitchens That Age Well",
    category: "Design",
    excerpt:
      "Five principles we return to when designing kitchens meant to be lived in for thirty years.",
    cover: blogKitchen,
    readTime: "6 min read",
    date: "January 2025",
    body: [
      "Kitchens are the rooms that get the most use and the least patience for trends. We design them to be quietly beautiful in their first year and just as composed in their thirtieth.",
      "Rift-cut white oak, honed stone, and unlacquered brass are materials that improve with use. Painted cabinetry, polished chrome, and fashionable colorways rarely do.",
      "We also believe in giving the kitchen room to breathe — generous aisles, a working pantry, and a clear line of sight to the rest of the home. The best kitchens never feel like the most important room. They simply work.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
