import BgKisiwani from "./assets/kisiwani-three.jpg";
import Kisiwani2 from "./assets/kisiwani-two.jpg";
import Kisiwani1 from "./assets/kisiwani-one.jpg";
import BgMidaCreek from "./assets/Creek1.jpg";
import Creek2 from "./assets/Creek2.jpg";
import Creek3 from "./assets/Creek3.jpg";
import Creek4 from "./assets/Creek4.jpg";
import BgCartography from "./assets/Agency1.jpg";
import Agency2 from "./assets/Agency2.jpg";
import Agency3 from "./assets/Agency3.jpg";
import Agency4 from "./assets/Agency4.jpg";
import BgSolidarity from "./assets/Coast1.jpg";
import Solidarity2 from "./assets/Coast2.jpg";
import Solidarity3 from "./assets/Coast3.jpg";
import Solidarity4 from "./assets/Coast4.jpg";

export const projects = [
  {
    number: "01",
    slug: "kisiwani-island-project",
    year: "2023",
    title: "Kisiwani Island Project",
    subtitle: "Participatory Mapping",
    tags: ["Participation", "Indigenous knowledge", "Spatial memory"],
    text: "A community-grounded mapping process exploring place, memory, livelihoods and the spatial knowledge held beyond formal cartographic systems.",
    detail:
      "This project explores how community memory, lived experience and localized knowledge can become part of spatial representation. Rather than treating the map as a finished technical object, the work approaches mapping as a process of listening, interpretation and collective knowledge production.",
    location: "Coastal Kenya",
    method: "Participatory and counter-mapping",
    blogImages: [BgKisiwani, Kisiwani1, Kisiwani2],
  },
  {
    number: "02",
    slug: "mida-creek-spatialities",
    year: "2022",
    title: "Mapping Spatialities in and around Mida Creek",
    subtitle: "Coastal Spatial Research",
    tags: ["Spatial dynamics", "Territory", "Coastal Kenya"],
    text: "An inquiry into how everyday relationships with land, water, mobility and resources produce spatial realities that formal maps can overlook.",
    detail:
      "The research examines the spatial relationships that emerge through everyday practices around Mida Creek, paying attention to territory, mobility, resources and local knowledge that may remain absent from formal spatial representations.",
    location: "Mida Creek, Kenya",
    method: "Spatial analysis and field research",
    blogImages: [BgMidaCreek, Creek2, Creek3, Creek4],
  },
  {
    number: "03",
    slug: "rewriting-history-cartography",
    year: "2022",
    title: "Re-Writing History Through Cartographic Agency",
    subtitle: "Critical Cartography",
    tags: ["History", "Representation", "Agency"],
    text: "A critical investigation of the politics of representation and the possibility of re-reading historical territories through alternative spatial narratives.",
    detail:
      "This project questions how historical territories are represented and remembered. It considers cartographic agency as a way of revisiting inherited spatial narratives and opening alternative readings of place, history and territory.",
    location: "Coastal Kenya",
    method: "Historical and critical cartographic research",
    blogImages: [BgCartography, Agency2, Agency3, Agency4],
  },
  {
    number: "04",
    slug: "mida-creek-area-solidarity-networks",
    year: "2021",
    title: "Mapping Solidarity Networks in Mida Creek Area",
    subtitle: "Collective Action",
    tags: ["Networks", "Social innovation", "Collective action"],
    text: "A mapping experiment tracing relationships, forms of mutual support and locally embedded networks that sustain community action.",
    detail:
      "The project traces relationships and forms of mutual support that sustain community action. Mapping is used here to make social relationships and locally embedded networks visible as part of a broader inquiry into social innovation and collective agency.",
    location: "Mida Creek Area, Kenya",
    method: "Network mapping and community engagement",
    blogImages: [BgSolidarity, Solidarity2, Solidarity3, Solidarity4],
  },
];
export const practice = [
  [
    "01",
    "Critical Spatial Research",
    "Investigating how territory, institutions, histories and everyday practices shape spatial conditions.",
  ],
  [
    "02",
    "Participatory & Counter-Mapping",
    "Working with communities to surface situated knowledge, memory and alternative territorial readings.",
  ],
  [
    "03",
    "Spatial Analysis",
    "Interpreting relationships between movement, land, resources, infrastructure and social life.",
  ],
  [
    "04",
    "Community Knowledge Documentation",
    "Transcribing oral narratives, local intelligence and lived experience into spatial forms.",
  ],
  [
    "05",
    "Spatial Visualization",
    "Using diagrams, maps, imagery and experimental representations to communicate complex spatial ideas.",
  ],
  [
    "06",
    "Capacity Building",
    "Developing critical mapping literacy and practical tools for communities, students and practitioners.",
  ],
  [
    "07",
    "Physical Planning",
    "Professional planning services grounded in contextual, inclusive and evidence-informed practice.",
  ],
];

export const notes = [
  {
    date: "15.07.2023",
    category: "FIELDWORK",
    title: "Journey into the Heart of Kisiwani Island",
    link: projects[0].slug,
  },
  {
    date: "—",
    category: "CRITICAL CARTOGRAPHY",
    title: "Unearthing the Spatial Violence",
    link: projects[1].slug,
  },
  {
    date: "RESEARCH NOTE",
    category: "METHODS",
    title: "What happens when mapping becomes a participatory practice?",
    link: projects[3].slug,
  },
];
