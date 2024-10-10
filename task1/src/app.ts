import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import { ErrorMiddeWare } from "./middlewares/error";
import fileRoute from "./routes/file.route";
import reportRoute from "./routes/report.route";
export const app = express();

export const expressApp = async () => {
  app.use(express.json({ limit: "50mb" }));

  app.use("/files", fileRoute);
  app.use("/reports", reportRoute);

  app.all("*", (req: Request, _: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
  });

  app.use(ErrorMiddeWare);
  return app;
};
