import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type AssessmentInput } from "@shared/routes";
import { useSubmitAssessment } from "@/hooks/use-assessments";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface AssessmentDialogProps {
  children: React.ReactNode;
}

type StepField = keyof AssessmentInput;

// Formats a raw input into a US phone pattern: (555) 123-4567
function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const steps: { title: string; subtitle: string; fields: StepField[] }[] = [
  {
    title: "Let's get to know you",
    subtitle: "Your information is confidential and HIPAA-protected.",
    fields: ["fullName", "email"],
  },
  {
    title: "What brings you here?",
    subtitle: "This helps our physicians understand how we can help.",
    fields: ["symptoms", "message"],
  },
  {
    title: "How should we reach you?",
    subtitle:
      "Ketamine is a controlled medication — every patient must be medically screened each month before a new prescription. A phone number lets our clinicians complete your monthly review.",
    fields: ["phone"],
  },
];

export function AssessmentDialog({ children }: AssessmentDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const submitAssessment = useSubmitAssessment();

  const form = useForm<AssessmentInput>({
    resolver: zodResolver(api.assessments.create.input),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      symptoms: "",
      message: "",
    },
  });

  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleNext = async () => {
    const valid = await form.trigger(steps[step].fields);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data: AssessmentInput) => {
    submitAssessment.mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
        setStep(0);
      },
    });
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      form.reset();
      setStep(0);
    }
  };

  const current = steps[step];
  const isLast = step === totalSteps - 1;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[var(--cream)] border-none shadow-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between text-xs font-medium tracking-widest uppercase text-[var(--warm-gray)] mb-3">
            <span>
              Step {step + 1} of {totalSteps}
            </span>
            <span>Free Clinical Assessment</span>
          </div>
          <div className="h-1.5 w-full bg-[var(--light-gray)] rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-[var(--sage)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <DialogTitle className="font-display text-3xl font-normal text-[var(--charcoal)]">
            {current.title}
          </DialogTitle>
          <DialogDescription className="text-[var(--warm-gray)] font-light">
            {current.subtitle}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            {step === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--charcoal)]">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jane Doe"
                          {...field}
                          className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--charcoal)]">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="jane@example.com"
                          {...field}
                          className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="symptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--charcoal)]">Primary Symptoms</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Depression, Anxiety, PTSD"
                          {...field}
                          className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[var(--charcoal)]">
                        Additional Context (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe what you've tried before or what you're hoping to achieve..."
                          className="resize-none min-h-[120px] bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 2 && (
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--charcoal)]">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(555) 123-4567"
                        maxLength={14}
                        {...field}
                        value={field.value || ""}
                        onChange={(e) => field.onChange(formatPhone(e.target.value))}
                        className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="pt-4 flex gap-3">
              {step > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="rounded-full py-6 px-6 border-[var(--charcoal)]/20 text-[var(--charcoal)]"
                >
                  Back
                </Button>
              )}
              {!isLast ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 hover:-translate-y-0.5"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={submitAssessment.isPending}
                  className="flex-1 bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 hover:-translate-y-0.5"
                >
                  {submitAssessment.isPending ? "Submitting..." : "Submit Assessment"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
