import { z } from "zod";

// DTO for file upload
export const FileUploadSchema = z.object({
  file: z.object({
    originalname: z.string().refine((name) => name.endsWith(".xlsx"), {
      message: "Invalid file format. Only .xlsx files are allowed.",
    }),
    path: z.string(),
  }),
});
