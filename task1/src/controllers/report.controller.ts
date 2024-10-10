import { inject, injectable } from "inversify";
import { INTERFACE_NAME } from "../utils/constants";
import { IFileService } from "../interfaces/IFileService";
import { NextFunction, Request, Response } from "express";
import { IReportService } from "../interfaces/IReportService";

@injectable()
export class ReportController {
  constructor(
    @inject(INTERFACE_NAME.ReportService) private _reportService: IReportService
  ) {}

  async queryReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { startTime, endTime } = req.query as {
        startTime: string;
        endTime: string;
      };
      const result = await this._reportService.queryByTimeRange(
        startTime,
        endTime
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
