import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type AssessmentInput } from "@shared/routes";
import { CONDITIONS, STATES } from "@shared/schema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";

interface AssessmentDialogProps {
  children: React.ReactNode;
}

const STORAGE_KEY = "lucid:assessment:draft";
type StepField = keyof AssessmentInput;

const STATE_LABELS: Record<(typeof STATES)[number], string> = {
  CA: "California",
  FL: "Florida",
  TX: "Texas",
  NY: "New York",
};

const CONDITION_LABELS: Record<(typeof CONDITIONS)[number], string> = {
  depression: "Depression",
  anxiety: "Anxiety",
  ptsd: "PTSD",
  other: "Something else",
};

const steps: { name: string; title: string; subtitle: string; fields: StepField[] }[] = [
  {
    name: "About you",
    title: "Let's get to know you",
    subtitle: "Your information is confidential and HIPAA-protected.",
    fields: ["firstName", "lastName", "email", "dateOfBirth", "state"],
  },
  {
    name: "What's going on",
    title: "What brings you here?",
    subtitle: "Select all that apply. This helps our physicians understand how we can help.",
    fields: ["conditions", "otherCondition", "message"],
  },
  {
    name: "How to reach you",
    title: "Where should we reach you?",
    subtitle:
      "Ketamine is a controlled medication — every patient must be medically screened each month before a new prescription. A phone number lets our clinicians complete your monthly review.",
    fields: ["phone"],
  },
];

// Phone formatter — (555) 123-4567
function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// DOB formatter — MM/DD/YYYY
function formatDOB(input: string): string {
  const digits = input.replace(/\D/g, "").slice(0, 8);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

const defaultValues: AssessmentInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  state: undefined as unknown as AssessmentInput["state"],
  conditions: [],
  otherCondition: "",
  message: "",
};

export function AssessmentDialog({ children }: AssessmentDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const submitAssessment = useSubmitAssessment();
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<AssessmentInput>({
    resolver: zodResolver(api.assessments.create.input),
    defaultValues,
    mode: "onBlur",
  });

  // Restore draft from localStorage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { values?: Partial<AssessmentInput>; step?: number };
      if (parsed.values) {
        form.reset({ ...defaultValues, ...parsed.values });
      }
      if (typeof parsed.step === "number") {
        setStep(Math.min(Math.max(parsed.step, 0), steps.length - 1));
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save draft on every change.
  useEffect(() => {
    const sub = form.watch((values) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ values, step }));
      } catch {
        /* ignore */
      }
    });
    return () => sub.unsubscribe();
  }, [form, step]);

  // Auto-focus first input when a step becomes visible.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open, step]);

  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;
  const current = steps[step];
  const isLast = step === totalSteps - 1;
  const watched = form.watch();
  const conditions = watched.conditions || [];

  // Gate the Continue/Submit button on whether required fields for this step
  // have values. Final regex / age / format validation runs on click.
  const stepHasValues = (() => {
    if (step === 0) {
      return Boolean(
        watched.firstName?.trim() &&
          watched.lastName?.trim() &&
          watched.email?.trim() &&
          watched.dateOfBirth?.trim() &&
          watched.state,
      );
    }
    if (step === 1) {
      if (!conditions.length) return false;
      if (conditions.includes("other") && !watched.otherCondition?.trim()) return false;
      return true;
    }
    return Boolean(watched.phone && watched.phone.replace(/\D/g, "").length >= 10);
  })();

  const handleNext = async () => {
    const valid = await form.trigger(current.fields);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data: AssessmentInput) => {
    submitAssessment.mutate(data, {
      onSuccess: () => {
        setSubmittedName(data.firstName);
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          /* ignore */
        }
      },
    });
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && submittedName) {
      // After a successful submit, fully reset on close.
      form.reset(defaultValues);
      setStep(0);
      setSubmittedName(null);
    }
  };

  const toggleCondition = (val: (typeof CONDITIONS)[number]) => {
    const current = form.getValues("conditions") || [];
    const next = current.includes(val)
      ? current.filter((c) => c !== val)
      : [...current, val];
    form.setValue("conditions", next, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] bg-[var(--cream)] border-none shadow-2xl max-h-[90vh] overflow-y-auto">
        {submittedName ? (
          <SuccessState firstName={submittedName} onClose={() => handleOpenChange(false)} />
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center justify-between text-xs font-medium tracking-widest uppercase text-[var(--warm-gray)] mb-3">
                <span>
                  Step {step + 1} of {totalSteps} — {current.name}
                </span>
                <span className="hidden sm:inline">Free Clinical Assessment</span>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[var(--charcoal)]">First name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane"
                                autoComplete="given-name"
                                {...field}
                                ref={(el) => {
                                  field.ref(el);
                                  firstFieldRef.current = el;
                                }}
                                className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[var(--charcoal)]">Last name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                autoComplete="family-name"
                                {...field}
                                className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[var(--charcoal)]">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              autoComplete="email"
                              placeholder="jane@example.com"
                              {...field}
                              className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[var(--charcoal)]">Date of birth</FormLabel>
                            <FormControl>
                              <Input
                                inputMode="numeric"
                                autoComplete="bday"
                                placeholder="MM/DD/YYYY"
                                maxLength={10}
                                {...field}
                                value={field.value || ""}
                                onChange={(e) => field.onChange(formatDOB(e.target.value))}
                                className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                              />
                            </FormControl>
                            <p className="text-[11px] text-[var(--warm-gray)]/80 font-light">
                              Required — we only treat adults 18+
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[var(--charcoal)]">State</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <FormControl>
                                <SelectTrigger className="bg-white/50 border-[var(--light-gray)] focus:ring-[var(--sage)]">
                                  <SelectValue placeholder="Select your state" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {STATES.map((s) => (
                                  <SelectItem key={s} value={s}>
                                    {STATE_LABELS[s]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <p className="text-[11px] text-[var(--warm-gray)]/80 font-light">
                              We currently practice in CA, FL, TX, NY.
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="conditions"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-[var(--charcoal)]">
                            What would you like help with?
                          </FormLabel>
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            {CONDITIONS.map((c) => {
                              const selected = conditions.includes(c);
                              return (
                                <button
                                  key={c}
                                  type="button"
                                  onClick={() => toggleCondition(c)}
                                  ref={c === CONDITIONS[0] ? (el => { if (el) firstFieldRef.current = el as unknown as HTMLInputElement; }) : undefined}
                                  className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border text-left text-sm transition-all ${
                                    selected
                                      ? "bg-[var(--sage)]/15 border-[var(--sage)] text-[var(--charcoal)]"
                                      : "bg-white/60 border-[var(--light-gray)] text-[var(--charcoal)]/80 hover:border-[var(--charcoal)]/30"
                                  }`}
                                >
                                  <span>{CONDITION_LABELS[c]}</span>
                                  {selected && (
                                    <Check size={16} className="text-[var(--sage-dark)]" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {conditions.includes("other") && (
                      <FormField
                        control={form.control}
                        name="otherCondition"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[var(--charcoal)]">
                              Tell us more
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What would you like help with?"
                                {...field}
                                value={field.value || ""}
                                className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[var(--charcoal)]">
                            Anything else we should know? (Optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What you've tried before, what you're hoping for, or anything else…"
                              className="resize-none min-h-[100px] bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
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
                        <FormLabel className="text-[var(--charcoal)]">Phone number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="(555) 123-4567"
                            maxLength={14}
                            {...field}
                            ref={(el) => {
                              field.ref(el);
                              firstFieldRef.current = el;
                            }}
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
                      disabled={!stepHasValues}
                      className="flex-1 bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={submitAssessment.isPending || !stepHasValues}
                      className="flex-1 bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                    >
                      {submitAssessment.isPending ? "Submitting..." : "Submit Assessment"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function SuccessState({ firstName, onClose }: { firstName: string; onClose: () => void }) {
  return (
    <div className="text-center py-6">
      <div className="w-14 h-14 rounded-full bg-[var(--sage)]/15 border border-[var(--sage)]/30 flex items-center justify-center mx-auto mb-5">
        <Check className="text-[var(--sage-dark)]" size={26} />
      </div>
      <DialogTitle className="font-display text-3xl font-normal text-[var(--charcoal)] mb-3">
        Thanks, {firstName}.
      </DialogTitle>
      <DialogDescription className="text-[var(--warm-gray)] font-light leading-relaxed mb-6">
        A board-certified physician will review your assessment within one business day. You'll
        get an email when it's time to book your consult.
      </DialogDescription>
      <Button
        onClick={onClose}
        className="bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-6 px-8 text-base font-medium"
      >
        Close
      </Button>
    </div>
  );
}
