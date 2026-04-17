import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: "Custom Home" | "Renovation" | "Interiors";
  status: "Completed" | "In Progress";
  hero: string;
  blurb: string;
  scope: string[];
  story: string;
  specs: { label: string; value: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "the-aspen-residence",
    title: "The Aspen Residence",
    location: "Deer Valley, UT",
    year: 2024,
    category: "Custom Home",
    status: "Completed",
    hero: project1,
    blurb: "A sculpted hillside retreat framed by aspen and stone.",
    scope: ["Architecture coordination", "Construction", "Interior millwork"],
    story:
      "Set into a north-facing slope above Deer Valley, the Aspen Residence balances raw alpine geology with quiet, considered interiors. Board-formed concrete walls anchor the home to the site, while warm cedar volumes float above to frame the long valley view.",
    specs: [
      { label: "Square footage", value: "8,400 sq ft" },
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "6.5" },
      { label: "Lot", value: "1.8 acres" },
      { label: "Completed", value: "2024" },
    ],
    gallery: [project1, project2, project6, project4],
  },
  {
    slug: "promontory-house",
    title: "Promontory House",
    location: "Promontory, UT",
    year: 2023,
    category: "Custom Home",
    status: "Completed",
    hero: project2,
    blurb: "A double-height great room engineered around a single mountain vista.",
    scope: ["Design-build", "Interior architecture", "Exterior hardscape"],
    story:
      "Promontory House is organized around a single, uninterrupted view of the Wasatch Back. Blackened steel windows and a quarry-cut stone fireplace establish a quiet vertical rhythm, allowing the landscape to do the talking.",
    specs: [
      { label: "Square footage", value: "10,200 sq ft" },
      { label: "Bedrooms", value: "6" },
      { label: "Bathrooms", value: "7" },
      { label: "Lot", value: "2.4 acres" },
      { label: "Completed", value: "2023" },
    ],
    gallery: [project2, project1, project6, project5],
  },
  {
    slug: "tuhaye-chalet",
    title: "Tuhaye Chalet",
    location: "Tuhaye, UT",
    year: 2024,
    category: "Custom Home",
    status: "Completed",
    hero: project3,
    blurb: "A contemporary alpine chalet detailed in dark cedar and quarried stone.",
    scope: ["Design-build", "Custom millwork", "Lighting design"],
    story:
      "Tuhaye Chalet reinterprets the alpine vernacular through a modern lens. Deep eaves, a stacked stone chimney, and bronze-frame glazing define a home that reads as confident and quiet from every approach.",
    specs: [
      { label: "Square footage", value: "7,600 sq ft" },
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "5.5" },
      { label: "Lot", value: "1.3 acres" },
      { label: "Completed", value: "2024" },
    ],
    gallery: [project3, project4, project6, project1],
  },
  {
    slug: "park-meadows-kitchen",
    title: "Park Meadows Kitchen",
    location: "Park Meadows, UT",
    year: 2023,
    category: "Renovation",
    status: "Completed",
    hero: project4,
    blurb: "A full kitchen and great room renovation in white oak and Calacatta.",
    scope: ["Renovation", "Custom cabinetry", "Material specification"],
    story:
      "We rebuilt this Park Meadows kitchen from the studs out, opening it to the great room and introducing a quiet palette of rift-cut white oak, Calacatta marble, and brushed brass that suits four-season living.",
    specs: [
      { label: "Renovation area", value: "1,800 sq ft" },
      { label: "Cabinetry", value: "Rift-cut white oak" },
      { label: "Counters", value: "Calacatta marble" },
      { label: "Hardware", value: "Brushed brass" },
      { label: "Completed", value: "2023" },
    ],
    gallery: [project4, project2, project6, project3],
  },
  {
    slug: "victory-ranch-overlook",
    title: "Victory Ranch Overlook",
    location: "Victory Ranch, UT",
    year: 2025,
    category: "Custom Home",
    status: "In Progress",
    hero: project5,
    blurb: "A cantilevered home perched at the edge of the canyon.",
    scope: ["Design-build", "Site engineering", "Exterior pool & terrace"],
    story:
      "Currently under construction, Victory Ranch Overlook cantilevers a steel-framed living wing over the canyon edge, with an infinity-edge pool drawing the eye out to the Uinta range beyond.",
    specs: [
      { label: "Square footage", value: "11,800 sq ft" },
      { label: "Bedrooms", value: "6" },
      { label: "Bathrooms", value: "8" },
      { label: "Lot", value: "3.6 acres" },
      { label: "Completion", value: "Late 2025" },
    ],
    gallery: [project5, project1, project2, project6],
  },
  {
    slug: "summit-park-retreat",
    title: "Summit Park Retreat",
    location: "Summit Park, UT",
    year: 2022,
    category: "Interiors",
    status: "Completed",
    hero: project6,
    blurb: "A serene primary suite with full-height glazing to the Wasatch.",
    scope: ["Interior architecture", "Furniture specification", "Custom rugs"],
    story:
      "A complete interior reimagining of a Summit Park primary suite, defined by floor-to-ceiling oak paneling, a low-profile platform bed, and bespoke wool rugs woven for the room.",
    specs: [
      { label: "Suite area", value: "1,100 sq ft" },
      { label: "Wall finish", value: "Smoked oak panel" },
      { label: "Glazing", value: "Floor-to-ceiling" },
      { label: "Textiles", value: "Custom wool" },
      { label: "Completed", value: "2022" },
    ],
    gallery: [project6, project2, project4, project1],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
