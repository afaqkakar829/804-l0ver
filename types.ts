
export interface Milestone {
  year: string;
  title: string;
  description: string;
  category: 'cricket' | 'philanthropy' | 'politics';
  image: string;
}

export interface Quote {
  text: string;
  context: string;
}

export interface StatItem {
  label: string;
  value: string;
  detail: string;
}
