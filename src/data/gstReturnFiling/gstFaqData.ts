import {serviceFaqTypes } from "@/types";

export const gstFaqData: serviceFaqTypes[] = [
  {
    label: "How often should I file GST returns?",
    value:
      " It depends on your business type. Regular taxpayers must file monthly (GSTR-1, GSTR-3B), while composition scheme businesses file quarterly (CMP-08) and annually (GSTR-4).",
  },
  {
    label: "What is GSTR-2A and 2B?",
    value:
      "These are auto-generated returns showing your inward supplies from suppliers. 2A is dynamic; 2B is static and supports ITC reconciliation.",
  },
  {
    label: " Is ITR-1 the correct form if I have capital gains income?",
    value:
      "You cannot use ITR-1 if you have income from capital gains, whether short-term or long-term. In such cases, ITR-2 is the appropriate form for filing your return.",
  },
  {
    label: " Do I need to file a return even if there are no sales?",
    value:
      "  Yes. Nil returns must be filed regularly to maintain compliance and avoid penalties.",
  },
  {
    label: "What is GSTR-9 and GSTR-9C?",
    value:
      " GSTR-9 is the annual return and GSTR-9C is a reconciliation statement required for certain businesses. Our team handles both.(ADD TURNOVER)",
  },
];
