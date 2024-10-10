import { Container } from "inversify";
import { IFileService } from "../../interfaces/IFileService";
import { INTERFACE_NAME } from "../constants";
import { FileService } from "../../services/file.service";
import { FileController } from "../../controllers/file.controller";
import { IReportService } from "../../interfaces/IReportService";
import { ReportService } from "../../services/report.service";
import { ReportController } from "../../controllers/report.controller";

const container = new Container();
container.bind<IFileService>(INTERFACE_NAME.FileService).to(FileService);
container.bind(INTERFACE_NAME.FileController).to(FileController);
container.bind<IReportService>(INTERFACE_NAME.ReportService).to(ReportService);
container.bind(INTERFACE_NAME.ReportController).to(ReportController);

export default container;
