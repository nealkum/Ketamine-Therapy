import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Is at-home ketamine therapy safe?",
      a: "Yes. When prescribed by a board-certified physician and taken according to specific protocols, at-home ketamine is highly safe. Our medical team carefully evaluates every patient, prescribes precise dosages, and monitors your progress throughout treatment."
    },
    {
      q: "How fast will I see results?",
      a: "Many patients experience a noticeable shift in their mood, reduced anxiety, or a lifting of depressive symptoms within 24 to 48 hours of their first session. However, optimal and sustained results usually develop over a full course of treatment."
    },
    {
      q: "Do I need a prescription?",
      a: "Yes. Ketamine is a scheduled medication. You must complete our clinical assessment and have a video consultation with one of our licensed physicians, who will determine if treatment is medically appropriate for you and issue the prescription."
    },
    {
      q: "What does a session feel like?",
      a: "Experiences vary by dose and individual. Most patients report feeling deeply relaxed, mildly disconnected from their normal anxious thought loops, and experiencing a sense of expanded awareness. It is generally described as a peaceful, introspective state lasting 45-90 minutes."
    },
    {
      q: "Is this covered by insurance?",
      a: "Currently, at-home ketamine therapy is generally considered out-of-network by most major insurance providers. However, we can provide superbills that you may submit to your insurance for potential partial reimbursement depending on your out-of-network benefits."
    },
    {
      q: "Why do I need a monthly medical check-in?",
      a: "Ketamine is a Schedule III controlled medication. Before any refill we review your response, side effects, and overall health to confirm continued treatment is appropriate. This protects you and keeps our prescribing practices responsible."
    },
    {
      q: "Can I drive after a session?",
      a: "No. You should not drive, operate machinery, or make major decisions for the rest of the day after a session. Plan your sessions for a time you can rest afterward."
    },
    {
      q: "Is ketamine addictive?",
      a: "At the low, physician-monitored doses used for therapy, addiction risk is low but not zero. We screen for substance use history during intake and decline treatment when risk factors are present. If you have concerns, our clinicians will discuss them openly."
    },
    {
      q: "What if it's not working for me?",
      a: "Roughly 20–30% of patients don't respond adequately to ketamine. If your monthly check-in shows limited benefit, we'll adjust your protocol or, if appropriate, help you transition to another form of care."
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">Questions & Answers</div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light">
            Commonly asked <em className="italic text-[var(--sage-dark)]">questions</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--charcoal)]/10 py-2">
                <AccordionTrigger className="font-display text-xl text-[var(--charcoal)] font-normal hover:no-underline hover:text-[var(--sage-dark)] text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--warm-gray)] text-base font-light leading-relaxed pb-6 pr-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
