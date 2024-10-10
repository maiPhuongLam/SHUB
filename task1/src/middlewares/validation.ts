import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validationResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
        file: req.file,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ message: "Validation error", details: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };
