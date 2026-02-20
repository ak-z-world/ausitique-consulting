type TableRow = {
  columnOne?: string;
  columnTwo?: string;
  columnThree?: string;
};

export type ServiceTableTypes = {
  tableTitle?: string;
  tableHeadData: string[];
  tableBodyData: TableRow[];
  tableStyle?:string
};
