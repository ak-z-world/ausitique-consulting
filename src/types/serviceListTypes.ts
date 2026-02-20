// export type serviceListTypes = {
//   heading: string;
//   bulletPointsTitle?: string;
//   bulletPoints?: string[];
//   bottomText?:string;
// };

export type serviceListTypes = {
  heading: string;
  bulletPointsTitle?: string;
  bulletPoints?: string[] | { text: string; subPoints?: string[] }[];
  bottomText?: string;
};
