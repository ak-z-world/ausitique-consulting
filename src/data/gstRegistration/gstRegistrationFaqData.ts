import { serviceFaqTypes } from "@/types";

export const gstRegistrationFaqData: serviceFaqTypes[] = [
  {
    label: "Is GST registration mandatory for my business?",
    value:
      "It’s mandatory if your annual turnover exceeds ₹20 lakhs for services or ₹40 lakhs for goods, or if you operate interstate or sell via e-commerce platforms.",
  },
  {
    label: "How long does the registration take?",
    value:
      "If all documents are correct and no queries are raised, registration is usually completed within 3–7 working days.If a GST officer raises a query, the process may extend to 14–21 working days, depending on your response time and officer review.If physical verification is required, it can take 15–22+ working days, based on the site inspection and approval.",
  },


  {
    label: "Can Auditique Consulting help with return filing and compliance?",
    value:
      " Absolutely. We offer ongoing GST filing and compliance support at competitive rates.",
  },
  {
    label: "Is GST registration mandatory for generating an E-Way Bill?",
    value:
      "Yes, GST registration is mandatory for generating an E-Way Bill. A valid GSTIN (Goods and Services Tax Identification Number) is required to access the E-Way Bill portal. The E-Way Bill is used to track the movement of goods valued over ₹50,000. Without GST registration, you cannot log in to the portal or generate E-Way Bills.",
  },

  {
    label: "What is a GST Identification Number (GSTIN)?",
    value:
      "A GST Identification Number (GSTIN) is a 15-digit unique ID assigned to GST-registered businesses. It is structured using the state code, PAN, and a registration number, and is used for GST compliance and tax-related activities. For example, in the GSTIN 33ABCDE1234F1Z5, the number 33 represents the state code for Tamil Nadu, ABCDE1234F is the PAN number, 1 denotes the number of registrations under the same PAN in the state, Z is a default character, and 5 is a check digit for security.",
  },
];
