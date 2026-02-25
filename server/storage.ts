import { db } from "./db";
import {
  assessments,
  type Assessment,
  type CreateAssessmentRequest,
} from "@shared/schema";

export interface IStorage {
  createAssessment(assessment: CreateAssessmentRequest): Promise<Assessment>;
}

export class DatabaseStorage implements IStorage {
  async createAssessment(assessment: CreateAssessmentRequest): Promise<Assessment> {
    const [created] = await db.insert(assessments).values(assessment).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
