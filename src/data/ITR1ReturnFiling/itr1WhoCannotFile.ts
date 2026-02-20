import { serviceListTypes } from "@/types";

export const itr1WhoCannotFileData: serviceListTypes = {
  heading: "Who Cannot File ITR-1?",
  bulletPointsTitle: "You are not eligible to file ITR-1 if:",
  bulletPoints: [
    "You are an NRI or RNOR (Resident Not Ordinarily Resident)",
    "Your income exceeds ₹50 lakh",
    "You earn from multiple house properties",
    "You have capital gains (short/long-term)",
    "You earn from lottery, gambling, or horse racing",
    "You have business/professional income",
    "You’re a director in a company",
    "You own unlisted shares",
    "You have foreign income or assets",
    "You claim tax on deferred ESOPs or deductions under Section 194N",
  ],
  bottomText:
    "You can also file if you club income with a spouse or minor, as long as it falls within eligible limits.",
};
