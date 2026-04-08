import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const assessments = pgTable("assessments", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  symptoms: text("symptoms").notNull(),
  message: text("message"),
  status: varchar("status", { length: 50 }).notNull().default('pending'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// === BASE SCHEMAS ===
export const insertAssessmentSchema = createInsertSchema(assessments).omit({
  id: true,
  createdAt: true,
  status: true
}).extend({
  fullName: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Phone number is required for monthly medical screening"),
  symptoms: z.string().min(1, "Please share what you're seeking help with"),
});

// === EXPLICIT API CONTRACT TYPES ===
export type Assessment = typeof assessments.$inferSelect;
export type InsertAssessment = z.infer<typeof insertAssessmentSchema>;

export type CreateAssessmentRequest = InsertAssessment;
export type AssessmentResponse = Assessment;
