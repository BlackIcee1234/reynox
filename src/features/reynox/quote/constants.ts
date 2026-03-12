import type { QuoteFormState } from "./types";

export const quoteInitialState: QuoteFormState = {
  name: "",
  company: "",
  industry: "",
  phone: "",
  email: "",
  projectDescription: "",
};

export const quoteIndustries = [
  "Alimentos y bebidas",
  "Farmaceutica",
  "Automotriz",
  "Logistica",
  "Manufactura avanzada",
  "Otro",
];
