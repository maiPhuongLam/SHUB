import { z } from "zod";

export const QuertReportSchema = z
  .object({
    startTime: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid date format for startTime.",
    }),
    endTime: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid date format for endTime.",
    }),
  })
  .refine((data) => new Date(data.startTime) <= new Date(data.endTime), {
    message: "startTime must be before or equal to endTime.",
  });
