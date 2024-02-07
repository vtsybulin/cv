export default interface IEmploymentRecord {
  companyName: string;
  link: string;
  location: string;
  position: string;
  companyOverview: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  stack: string[];
}
