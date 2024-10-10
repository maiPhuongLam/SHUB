export interface IFileService {
  upload(file: Express.Multer.File): Promise<{
    message: string;
  }>;
  validateFile(file: Express.Multer.File): Promise<boolean>;
}
