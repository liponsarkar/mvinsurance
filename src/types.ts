export type Language = 'es' | 'en';

export type PageId = 'home' | 'about' | 'insurance' | 'business' | 'retirement' | 'contact';

export interface InsuranceItem {
  id: string;
  category: 'personal' | 'family' | 'vehicle' | 'business' | 'future';
  icon: string;
  titleKey: string;
  shortDescKey: string;
  fullDescKey: string;
  featuresKey: string[];
  idealForKey: string;
  badge?: string;
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  insuranceType: string;
  preferredContact: 'whatsapp' | 'phone' | 'email';
  notes: string;
  acceptedTerms: boolean;
}
