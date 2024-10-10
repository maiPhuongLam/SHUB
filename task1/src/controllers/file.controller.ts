import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IFileService } from "../interfaces/IFileService";
import { INTERFACE_NAME } from "../utils/constants";
import { BadRequestError } from "../utils/error/error.handler";

@injectable()
export class FileController {
  constructor(
    @inject(INTERFACE_NAME.FileService) private _fileService: IFileService
  ) {}

  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        throw new BadRequestError("Not file uploaded");
      }

      const file = req.file;
      const result = await this._fileService.upload(file);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
