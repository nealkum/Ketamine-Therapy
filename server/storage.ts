import type { Assessment, CreateAssessmentRequest } from "@shared/schema";

export interface IStorage {
  createAssessment(assessment: CreateAssessmentRequest): Promise<Assessment>;
}

/**
 * In-memory storage. Data is not persisted across server restarts.
 * Submissions are also logged to the console for visibility during development.
 */
export class MemoryStorage implements IStorage {
  private assessments: Assessment[] = [];
  private nextId = 1;

  async createAssessment(input: CreateAssessmentRequest): Promise<Assessment> {
    const created: Assessment = {
      ...input,
      message: input.message ?? null,
      otherCondition: input.otherCondition ?? null,
      id: this.nextId++,
      status: "pending",
      createdAt: new Date(),
    };
    this.assessments.push(created);
    console.log("[assessment received]", {
      id: created.id,
      name: `${created.firstName} ${created.lastName}`,
      email: created.email,
      phone: created.phone,
      dateOfBirth: created.dateOfBirth,
      state: created.state,
      conditions: created.conditions,
      otherCondition: created.otherCondition,
    });
    return created;
  }
}

export const storage: IStorage = new MemoryStorage();
