import { useMutation } from "@tanstack/react-query";
import { api, type AssessmentInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitAssessment() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: AssessmentInput) => {
      const validated = api.assessments.create.input.parse(data);
      
      const res = await fetch(api.assessments.create.path, {
        method: api.assessments.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.assessments.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to submit assessment");
      }

      return api.assessments.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Assessment Submitted",
        description: "Thank you. Our medical team will review your information and contact you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
