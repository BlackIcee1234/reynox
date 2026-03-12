import type { QuoteFormErrors, QuoteFormState } from "./types";

export function validateQuoteForm(values: QuoteFormState): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.name.trim()) errors.name = "Ingresa tu nombre completo.";
  if (!values.company.trim()) errors.company = "Ingresa el nombre de tu empresa.";
  if (!values.industry.trim()) errors.industry = "Selecciona una industria.";
  if (!values.phone.trim()) errors.phone = "Ingresa un telefono de contacto.";

  if (!values.email.trim()) {
    errors.email = "Ingresa un correo electronico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Ingresa un correo valido.";
  }

  if (values.projectDescription.trim().length < 30) {
    errors.projectDescription = "Describe tu proyecto con al menos 30 caracteres.";
  }

  return errors;
}
