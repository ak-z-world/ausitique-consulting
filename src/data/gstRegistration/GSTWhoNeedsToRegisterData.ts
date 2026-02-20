import { serviceListTypes } from "@/types";

export const GSTWhoNeedsToRegisterData: serviceListTypes = {
  heading: "Who Needs to Register for GST?",
  bulletPoints: [
    {
      text: "Businesses Exceeding Turnover Threshold",
      subPoints: [
        "Any business engaged in the supply of goods or manufacturing with an annual turnover above ₹40 lakhs (₹20 lakhs for special category states) must register under GST.",
      ],
    },
    {
      text: "Service Providers",
      subPoints: [
        " If your service-based business crosses ₹20 lakhs in annual revenue (₹10 lakhs for special states), GST registration is mandatory.",
      ],
    },
    {
      text: "Interstate Suppliers",
      subPoints: [
        " Supplying goods or services across state borders? GST registration is a legal requirement",
      ],
    },
    {
      text: "E-Commerce Sellers & Operators",
      subPoints: [
        "Whether you’re selling through Amazon or managing an online platform, GST registration is compulsory.",
      ],
    },
    {
      text: "Casual Taxable Persons",
      subPoints: [
        " Occasional suppliers or businesses operating temporarily in a taxable territory must register.",
      ],
    },
    {
      text: "Reverse Charge Liability",
      subPoints: [
        " If you’re liable to pay tax under the reverse charge mechanism, GST registration is required.",
      ],
    },
    {
      text: "Non-Resident Taxable Persons",
      subPoints: [
        " Foreign individuals or entities supplying taxable goods/services in India must obtain GST registration.",
      ],
    },
    {
     text: "Non-Resident Taxable Persons",
     subPoints: [
       " Foreign individuals or entities supplying taxable goods/services in India must obtain GST registration.",
     ],
   },
   {
     text: "Input Service Distributors (ISD)",
     subPoints: [
       "Businesses distributing input tax credits among branches or units must register as ISDs.",
     ],
   },

   {
     text: "Agents & Representatives",
     subPoints: [
       "Agents supplying goods or services on behalf of others also need to register under GST.",
     ],
   },
   {
     text: "Online Service Providers from Abroad",
     subPoints: [
       " Entities offering digital services from outside India to Indian consumers must register, even without a physical presence.",
     ],
   },



   {
     text: "Migrated Entities",
     subPoints: [
       " Businesses previously registered under VAT, Excise, or Service Tax must shift to the GST regime.",
     ],
   },
   {
     text: "Exempted Goods/Services Dealers",
     subPoints: [
       " If you exclusively deal in GST-exempt goods or services, you’re not required to register — unless you cross other legal thresholds.",
     ],
   },
  ],
};
