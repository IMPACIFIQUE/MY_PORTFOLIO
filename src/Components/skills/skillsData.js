import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiActix,
  SiAngular,
  SiApachekafka,
  SiCircleci,
  SiCouchbase,
  SiDart,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpentelemetry,
  SiPostgresql,
  SiPostman,
  SiRust,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi, TbBrandAzure, TbBrandCSharp, TbCloudCog } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

// ---------------------------------------------------------------------------
// Tech logos in the "My Tech Universe" grid.
// Add, remove, or reorder items here.
// ---------------------------------------------------------------------------
export const techLogos = [
  { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Vue.js", icon: FaVuejs, color: "#42b883" },
  { name: "PHP", icon: FaPhp, color: "#777bb4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Git", icon: FaGitAlt, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "VS Code", icon: VscVscode, color: "#007acc" },
];

// ---------------------------------------------------------------------------
// All skill cards live in this one array. Change a "value" and the level
// label plus the progress bar update automatically.
// ---------------------------------------------------------------------------
export const skillsData = [
  {
    title: "Language",
    skills: [
      { name: "JavaScript", value: 90, icon: FaJs, color: "#f7df1e" },
      { name: "PHP", value: 75, icon: FaPhp, color: "#777bb4" },
      { name: "HTML5", value: 95, icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", value: 92, icon: FaCss3Alt, color: "#1572b6" },
      { name: "SQL", value: 80, icon: FaDatabase, color: "#38bdf8" },
      { name: "Rust", value: 30, icon: SiRust, color: "#ce422b" },
      { name: "Dart", value: 35, icon: SiDart, color: "#0175c2" },
      { name: "C#", value: 35, icon: TbBrandCSharp, color: "#a179dc" },
    ],
  },
  {
    title: "Front-End",
    skills: [
      { name: "React", value: 85, icon: FaReact, color: "#61dafb" },
      { name: "Vue.js", value: 82, icon: FaVuejs, color: "#42b883" },
      {
        name: "Tailwind CSS",
        value: 80,
        icon: SiTailwindcss,
        color: "#38bdf8",
      },
      { name: "Next.js", value: 65, icon: SiNextdotjs, color: "#ffffff" },
      { name: "Angular", value: 35, icon: SiAngular, color: "#dd0031" },
      { name: "Flutter", value: 30, icon: SiFlutter, color: "#02569b" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", value: 78, icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", value: 75, icon: SiExpress, color: "#ffffff" },
      { name: "REST APIs", value: 80, icon: TbApi, color: "#a78bfa" },
      { name: "Laravel", value: 60, icon: SiLaravel, color: "#ff2d20" },
      { name: ".NET", value: 40, icon: SiDotnet, color: "#8b5cf6" },
      { name: "NestJS", value: 45, icon: SiNestjs, color: "#e0234e" },
      { name: "Actix Web", value: 20, icon: SiActix, color: "#94a3b8" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Docker", value: 55, icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", value: 40, icon: SiKubernetes, color: "#326ce5" },
      {
        name: "GitHub Actions",
        value: 55,
        icon: SiGithubactions,
        color: "#2088ff",
      },
      { name: "Azure", value: 35, icon: TbBrandAzure, color: "#0078d4" },
      {
        name: "Google Cloud Platform",
        value: 40,
        icon: SiGooglecloud,
        color: "#4285f4",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        value: 65,
        icon: SiPostgresql,
        color: "#4169e1",
      },
      { name: "MySQL", value: 75, icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", value: 50, icon: SiMongodb, color: "#47a248" },
      { name: "Firestore", value: 40, icon: SiFirebase, color: "#ffca28" },
      { name: "Couchbase", value: 25, icon: SiCouchbase, color: "#ea2328" },
    ],
  },
  {
    title: "Other Interests",
    skills: [
      { name: "CircleCI", value: 40, icon: SiCircleci, color: "#f8fafc" },
      { name: "ServiceNow", value: 30, icon: TbCloudCog, color: "#62d84e" },
      { name: "GraphQL", value: 50, icon: SiGraphql, color: "#e10098" },
      { name: "Kafka", value: 35, icon: SiApachekafka, color: "#ffffff" },
      {
        name: "OpenTelemetry",
        value: 30,
        icon: SiOpentelemetry,
        color: "#f5a800",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", value: 85, icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", value: 85, icon: FaGithub, color: "#ffffff" },
      { name: "VS Code", value: 90, icon: VscVscode, color: "#007acc" },
      { name: "Postman", value: 75, icon: SiPostman, color: "#ff6c37" },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      {
        name: "PHP (advanced topics)",
        value: 60,
        icon: FaPhp,
        color: "#777bb4",
      },
      {
        name: "Database design",
        value: 65,
        icon: FaDatabase,
        color: "#38bdf8",
      },
    ],
  },
];

// Turn a percentage into one of the four friendly level labels.
export function getSkillLevel(value) {
  if (value >= 90) return "Expert";
  if (value >= 70) return "Advanced";
  if (value >= 40) return "Proficient";
  return "Familiar";
}
// added line
