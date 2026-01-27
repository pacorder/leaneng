
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface BenefitItem {
  title: string;
  content: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  traditional: string;
  leanEngineering: string;
  isPositive?: boolean;
}
