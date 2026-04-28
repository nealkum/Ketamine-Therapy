import { z } from "zod";

/**
 * ============================================================================
 * ASSESSMENT FORM — DATA CONTRACT
 * ============================================================================
 *
 * This is the only data flow in the prototype. The frontend posts this shape
 * to `POST /api/assessments` and expects `201 { ...input, id, status, createdAt }`
 * back. The validation rules below are intentional and clinically meaningful:
 *
 *   - dateOfBirth: real calendar date, MUST be 18+ (eligibility gate).
 *   - state:       restricted to states where licensed physicians operate.
 *                  Currently CA / FL / TX / NY — UPDATE PER REAL LICENSURE.
 *   - phone:       required (every patient is medically re-screened monthly).
 *   - conditions:  multi-select. "other" requires `otherCondition` text.
 *
 * For production: replace the in-memory store in `server/storage.ts` with
 * your real persistence layer; keep this validation contract intact so the
 * client form does not need to change.
 * ============================================================================
 */

// === ENUMS ===
export const STATES = ["CA", "FL", "TX", "NY"] as const;
export const CONDITIONS = ["depression", "anxiety", "ptsd", "other"] as const;

// Validates MM/DD/YYYY and that the patient is at least 18 years old.
const dobSchema = z
  .string()
  .regex(/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/, "Use format MM/DD/YYYY")
  .refine((dob) => {
    const [m, d, y] = dob.split("/").map(Number);
    const birth = new Date(y, m - 1, d);
    if (
      isNaN(birth.getTime()) ||
      birth.getFullYear() !== y ||
      birth.getMonth() !== m - 1 ||
      birth.getDate() !== d
    ) {
      return false;
    }
    const now = new Date();
    let age = now.getFullYear() - y;
    const beforeBirthday =
      now.getMonth() < m - 1 || (now.getMonth() === m - 1 && now.getDate() < d);
    if (beforeBirthday) age -= 1;
    return age >= 18 && age <= 120;
  }, "You must be 18 or older to use Lucid");

// === ZOD SCHEMAS ===
export const insertAssessmentSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Please enter a valid email"),
    phone: z
      .string()
      .min(7, "Phone number is required for monthly medical screening"),
    dateOfBirth: dobSchema,
    state: z.enum(STATES, {
      errorMap: () => ({ message: "Please select your state" }),
    }),
    conditions: z
      .array(z.enum(CONDITIONS))
      .min(1, "Please select at least one"),
    otherCondition: z.string().nullable().optional(),
    message: z.string().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.conditions.includes("other") && !data.otherCondition?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please describe what brings you here",
        path: ["otherCondition"],
      });
    }
  });

export const assessmentSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  dateOfBirth: z.string(),
  state: z.enum(STATES),
  conditions: z.array(z.enum(CONDITIONS)),
  otherCondition: z.string().nullable().optional(),
  message: z.string().nullable().optional(),
  id: z.number(),
  status: z.string(),
  createdAt: z.date(),
});

// === TYPES ===
export type Assessment = z.infer<typeof assessmentSchema>;
export type InsertAssessment = z.infer<typeof insertAssessmentSchema>;
export type StateCode = (typeof STATES)[number];
export type ConditionCode = (typeof CONDITIONS)[number];

export type CreateAssessmentRequest = InsertAssessment;
export type AssessmentResponse = Assessment;
