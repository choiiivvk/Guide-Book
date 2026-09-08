export type TabType = 'company' | 'office' | 'todo' | 'contacts';

export interface TodoItem {
  id: string;
  category: 'day1' | 'week1' | 'month1';
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
}

export interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  category: string;
}

export interface OfficeFacility {
  floor: string;
  name: string;
  description: string;
  details?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactItem {
  department: string;
  name: string;
  role: string;
  email: string;
  extension: string;
}
