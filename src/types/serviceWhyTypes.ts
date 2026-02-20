type FssaiDetail = {
  image: string;
  detailsHeading: string;
  detailsDescription: string;
};

export type serviceWhyTypes = {
  title: string;
  subTitle?:string,
  details: FssaiDetail[];
};
