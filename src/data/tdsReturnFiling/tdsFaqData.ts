import { serviceFaqTypes } from "@/types";

export const tdsFaqData: serviceFaqTypes[] = [
  {
    label: "What should I do if I make a mistake in my TDS return?",
    value:
      "If the original return is accepted by the TIN central system, you can file a revised TDS return. We help you make accurate corrections using the consolidated statement (Conso file) from TRACES.",
  },
  {
    label: "What is TAN and Why is it Mandatory for TDS?",
    value:
      "TAN (Tax Deduction and Collection Account Number) is a unique 10-digit alphanumeric number required for any person or entity deducting or collecting TDS. Without a valid TAN, TDS cannot be deposited or returns filed.",
  },
  {
    label: "Which Form Provides TDS Details in the Income Tax Portal?",
    value:
      "Form 26AS on the Income Tax Portal contains all TDS details, including deductions made, deposited, and matched with the taxpayer’s PAN. It’s essential for verifying your tax credits.",
  },
  {
    label: "What are the consequences of not filing or delaying TDS returns?",
    value:
      "Failure to file or delay TDS returns can lead to a late fee of ₹200 per day (u/s 234E), interest on late deduction at 1% per month, and 1.5% per month on late payment. It may also attract penalties, legal action, and loss of credit for the deductee.",
  },
  {
    label: "Is TDS Deducted on GST-Exclusive or Inclusive Invoice Value?",
    value:
      "As per CBDT guidelines, TDS is deducted on the base amount (excluding GST) if GST is shown separately in the invoice. This prevents double taxation on tax components.",
  },
];
