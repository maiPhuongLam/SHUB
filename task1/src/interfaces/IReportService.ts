import { QueryResult } from "../models/report.model";

export interface IReportService {
  queryByTimeRange(startTime: string, endTime: string): Promise<QueryResult>;
}
