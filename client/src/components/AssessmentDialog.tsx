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

export function AssessmentDialog({ children }: AssessmentDialogProps) {
  const [open, setOpen] = useState(false);
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

  const onSubmit = (data: AssessmentInput) => {
    submitAssessment.mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[var(--cream)] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl font-normal text-[var(--charcoal)]">Free Clinical Assessment</DialogTitle>
          <DialogDescription className="text-[var(--warm-gray)] font-light">
            Take the first step towards healing. Provide some basic information and our board-certified physicians will review your case.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--charcoal)]">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--charcoal)]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@example.com" {...field} className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--charcoal)]">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} value={field.value || ""} className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--charcoal)]">Primary Symptoms</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Depression, Anxiety, PTSD" {...field} className="bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]" />
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
                  <FormLabel className="text-[var(--charcoal)]">Additional Context (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe what you've tried before or what you're hoping to achieve..." 
                      className="resize-none min-h-[100px] bg-white/50 border-[var(--light-gray)] focus-visible:ring-[var(--sage)]"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={submitAssessment.isPending}
                className="w-full bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-6 text-base font-medium transition-all shadow-lg hover:shadow-xl active:translate-y-0.5 hover:-translate-y-0.5"
              >
                {submitAssessment.isPending ? "Submitting..." : "Submit Assessment"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
