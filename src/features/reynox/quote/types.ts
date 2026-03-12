export type QuoteFormState = {
  name: string;
  company: string;
  industry: string;
  phone: string;
  email: string;
  projectDescription: string;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormState, string>>;
