import { injectable } from "inversify";
import { IReportService } from "../interfaces/IReportService";
import Report, { QueryResult } from "../models/report.model";
import { INTERFACE_NAME } from "../utils/constants";

@injectable()
export class ReportService implements IReportService {
  async queryByTimeRange(
    startTime: string,
    endTime: string
  ): Promise<QueryResult> {
    try {
      const result = await Report.queryByTimeRange(startTime, endTime);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
