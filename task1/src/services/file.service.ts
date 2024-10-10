import { injectable } from "inversify";
import xlsx from "xlsx";
import fs from "fs";
import { IFileService } from "../interfaces/IFileService";
import Report from "../models/report.model";

@injectable()
export class FileService implements IFileService {
  constructor() {}
  async upload(file: Express.Multer.File): Promise<{ message: string }> {
    try {
      const workbook = xlsx.readFile(file.path);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = xlsx.utils.sheet_to_json(worksheet);
      const mappedData = data.map((row: any) => ({
        transactionId: row["CHI TIẾT DOANH THU"] || "Unknown",
        date: row["__EMPTY"] || "Unknown",
        time: row["__EMPTY_1"] || "00:00:00",
        location: row["__EMPTY_2"] || "Unknown",
        pumpNumber: row["__EMPTY_3"] || "Unknown",
        fuelType: row["__EMPTY_4"] || "Unknown",
        volume: row["__EMPTY_5"] || 0,
        unitPrice: row["__EMPTY_6"] || 0,
        totalPrice: row["__EMPTY_7"] || 0,
        paymentMethod: row["__EMPTY_8"] || "Unknown",
        customerType: row["__EMPTY_9"] || "Unknown",
        signature: row["__EMPTY_15"] || "Unknown",
      }));

      await Report.save(mappedData);
      fs.unlinkSync(file.path);

      return { message: "File processed successfully" };
    } catch (error) {
      throw error;
    }
  }

  validateFile(file: Express.Multer.File): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
