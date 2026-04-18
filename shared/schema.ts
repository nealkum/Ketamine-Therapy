import { z } from "zod";

// === ZOD SCHEMAS ===
// Pure zod schemas — no database. Keeps the same API contract as before.

export const insertAssessmentSchema = z.object({
  fullName: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone number is required for monthly medical screening"),
  symptoms: z.string().min(1, "Please share what you're seeking help with"),
  message: z.string().nullable().optional(),
});

export const assessmentSchema = insertAssessmentSchema.extend({
  id: z.number(),
  status: z.string(),
  createdAt: z.date(),
});

// === TYPES ===
export type Assessment = z.infer<typeof assessmentSchema>;
export type InsertAssessment = z.infer<typeof insertAssessmentSchema>;

export type CreateAssessmentRequest = InsertAssessment;
export type AssessmentResponse = Assessment;
