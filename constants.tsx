
import { Service, BenefitItem, ComparisonRow } from './types';

export const SERVICES: Service[] = [
  {
    id: 'design-optimization',
    title: 'Design Review & Optimization',
    description: 'Deep technical audits of existing designs to identify inefficiencies and streamline systems.',
    icon: 'fa-microchip',
    benefits: ['10-25% reduction in CAPEX/OPEX', 'Reduced material wastage', 'Enhanced system performance']
  },
  {
    id: 'value-engineering',
    title: 'Value Engineering',
    description: 'Rigorous analysis to ensure project functions are achieved at the lowest possible lifecycle cost.',
    icon: 'fa-chart-line',
    benefits: ['Constructability analysis', 'Alternative material assessment', 'Lifecycle cost modeling']
  },
  {
    id: 'on-demand-support',
    title: 'On-Demand Senior Support',
    description: 'Access a curated network of senior freelance engineers without the overhead of a full-time firm.',
    icon: 'fa-user-group',
    benefits: ['Flexible retainer models', 'Project-based fees', 'Specialist expertise on tap']
  },
  {
    id: 'no-savings-model',
    title: 'No-Savings-No-Fee Model',
    description: 'Unique risk-sharing approach where our compensation is directly tied to the savings we generate.',
    icon: 'fa-handshake',
    benefits: ['Zero upfront risk for proven audits', 'Performance-based incentives', 'Transparent ROI']
  }
];

export const WHY_US: BenefitItem[] = [
  {
    title: 'Ultra-Low Overhead',
    content: 'We avoid the expensive downtown offices and massive administrative staff of traditional firms. You pay for engineering expertise, nothing else.',
    icon: 'fa-piggy-bank'
  },
  {
    title: 'Senior Talent Only',
    content: 'Our network consists exclusively of engineers with 15+ years of experience. No juniors learning on your project time.',
    icon: 'fa-medal'
  },
  {
    title: 'LatAm Experts',
    content: 'Based in Chile, we understand the regional regulatory landscape and logistics across Latin America.',
    icon: 'fa-map-location-dot'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Fixed Overhead Costs',
    traditional: 'High (Office, HR, Admin)',
    leanEngineering: 'Minimal (Remote, Lean Admin)',
    isPositive: true
  },
  {
    feature: 'Staff Seniority',
    traditional: 'Mixed (Heavy Junior usage)',
    leanEngineering: 'Exclusively Senior Experts',
    isPositive: true
  },
  {
    feature: 'Pricing Model',
    traditional: 'Rigid Hourly / Lump Sum',
    leanEngineering: 'Flexible / Success-Based',
    isPositive: true
  },
  {
    feature: 'Response Speed',
    traditional: 'Bureaucratic Layers',
    leanEngineering: 'Agile & Direct Access',
    isPositive: true
  }
];
