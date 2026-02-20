import { serviceListTypes } from "@/types";

export const epfoDocumentsRequiredForRegistrationData: serviceListTypes = {
  heading: "Documents Required for EPF Registration",
  bulletPointsTitle:
    "EPFO Registration is applicable to a wide range of entities, including:",
  bulletPoints: [
    {
      text: "Business Documents:",
      subPoints: [
        "Certificate of Incorporation / Registration Certificate",
        "Partnership Deed or MOA & AOA (if applicable)",
        "GST Registration Certificate (if applicable)",
      ],
    },

    {
      text: "Proof of Identity:",
      subPoints: ["PAN of the business and PAN of owners/partners/directors"],
    },

    {
      text: "Address Proof:",
      subPoints: [
        "Electricity or water bill",
        "Rental agreement or property tax receipt",
      ],
    },

    {
      text: "Bank Details:",
      subPoints: ["Cancelled cheque", "Bank statement"],
    },

    {
      text: "Employee Information:",
      subPoints: [
        "Aadhaar and PAN of employees",
        "List of employees with DOB, father’s name, and salary",
        "Date of joining for each employee",
        "Consent letter from employees for PF deduction",
      ],
    },

    {
      text: "Other Requirements:",
      subPoints: [
        "Specimen signature on company letterhead",
        "Power of Attorney (if applicable)",
        "Form 5A (Ownership information)",
        "First invoice or contract as proof of establishment start date",
      ],
    },
   
  ],
  bottomText:
    "If any of the above employs 20 or more individuals, EPF registration becomes mandatory. Voluntary registration is also possible for businesses with fewer employees.",
};
