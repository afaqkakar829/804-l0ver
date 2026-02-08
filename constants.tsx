
import { Milestone, Quote, StatItem } from './types';

export const MILESTONES: Milestone[] = [
  {
    year: "1971",
    title: "International Debut",
    description: "Made his first-class debut in Lahore and subsequently his Test debut for Pakistan against England.",
    category: "cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop"
  },
  {
    year: "1982",
    title: "National Captaincy",
    description: "Appointed Captain of the Pakistan national cricket team, bringing a new era of aggression and discipline.",
    category: "cricket",
    image: "https://images.unsplash.com/photo-1540747913346-19e3ad643121?q=80&w=2188&auto=format&fit=crop"
  },
  {
    year: "1992",
    title: "World Cup Victory",
    description: "Led Pakistan to its first and only ICC Cricket World Cup title, defeating England in the final.",
    category: "cricket",
    image: "https://images.unsplash.com/photo-1587280501635-a19de238a81e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "1994",
    title: "Shaukat Khanum Hospital",
    description: "Opened the Shaukat Khanum Memorial Cancer Hospital & Research Centre in memory of his mother.",
    category: "philanthropy",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    year: "1996",
    title: "Founded PTI",
    description: "Launched Pakistan Tehreek-e-Insaf (Pakistan Movement for Justice) to fight corruption and injustice.",
    category: "politics",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2018",
    title: "Prime Minister of Pakistan",
    description: "Sworn in as the 22nd Prime Minister of Pakistan after a historic electoral victory.",
    category: "politics",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
];

export const QUOTES: Quote[] = [
  {
    text: "It is not defeat that should be feared, but the failure to learn from it.",
    context: "On Resilience and Success"
  },
  {
    text: "Never give up, no matter how hard the challenges are. Only those who never give up can reach the top.",
    context: "Message to Youth"
  },
  {
    text: "Compromise for your dream, but never compromise on your dream.",
    context: "Personal Philosophy"
  }
];

export const CRICKET_STATS: StatItem[] = [
  { label: "Matches", value: "88 Tests", detail: "3807 Runs, 362 Wickets" },
  { label: "ODI Wickets", value: "182", detail: "Avg 26.61" },
  { label: "Best Figures", value: "8/58", detail: "Vs Sri Lanka, 1982" }
];
