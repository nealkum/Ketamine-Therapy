import { useState } from "react";
import { PageLayout, Card } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Prototype-only: log to the console and show a success state.
    console.log("[contact submission]", Object.fromEntries(data.entries()));
    setSubmitted(true);
  };

  return (
    <PageLayout
      eyebrow="Get in touch"
      title={<>We'd love to <em className="italic text-[var(--sage-dark)]">hear from you</em>.</>}
      lede="Questions about treatment, eligibility, or working with Lucid? Our patient care team typically responds within one business day."
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6 mb-16">
        <Reveal>
          <Card title="Email">
            <a href="mailto:hello@lucid.example" className="text-[var(--sage-dark)] hover:underline flex items-center gap-2">
              <Mail size={16} /> hello@lucid.example
            </a>
          </Card>
        </Reveal>
        <Reveal delay={0.05}>
          <Card title="Patient support">
            <a href="tel:+18005551234" className="text-[var(--sage-dark)] hover:underline flex items-center gap-2">
              <Phone size={16} /> (800) 555-1234
            </a>
            <p className="mt-2 text-sm">Mon–Fri, 8a–8p ET</p>
          </Card>
        </Reveal>
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-[32px] p-8 lg:p-10 border border-[var(--charcoal)]/5 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="font-display text-2xl text-[var(--charcoal)] mb-3">Thanks — your message is in.</h3>
              <p className="text-[var(--warm-gray)] font-light">
                A member of our team will be in touch shortly. <span className="block text-xs mt-3 text-[var(--warm-gray)]/70">(Prototype: submission was logged to the browser console.)</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-display text-2xl text-[var(--charcoal)] mb-2">Send us a note</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-[var(--charcoal)] mb-2 block">Name</label>
                  <Input name="name" required placeholder="Jane Doe" className="bg-[var(--cream)]/60 border-[var(--light-gray)]" />
                </div>
                <div>
                  <label className="text-sm text-[var(--charcoal)] mb-2 block">Email</label>
                  <Input name="email" type="email" required placeholder="jane@example.com" className="bg-[var(--cream)]/60 border-[var(--light-gray)]" />
                </div>
              </div>
              <div>
                <label className="text-sm text-[var(--charcoal)] mb-2 block">Topic</label>
                <Input name="topic" placeholder="Eligibility, billing, press, other…" className="bg-[var(--cream)]/60 border-[var(--light-gray)]" />
              </div>
              <div>
                <label className="text-sm text-[var(--charcoal)] mb-2 block">Message</label>
                <Textarea name="message" required rows={5} placeholder="How can we help?" className="bg-[var(--cream)]/60 border-[var(--light-gray)] resize-none" />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--charcoal)] hover:bg-[var(--sage-dark)] text-white rounded-full py-4 text-base font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Send message
              </button>
              <p className="text-xs text-[var(--warm-gray)]/70 text-center">
                For urgent medical concerns, call <strong>(800) 555-1234</strong>. In a mental health crisis, dial <strong>988</strong>.
              </p>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
