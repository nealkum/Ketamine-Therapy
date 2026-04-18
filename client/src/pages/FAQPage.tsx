import { PageLayout } from "@/components/PageLayout";
import { FAQ } from "@/components/FAQ";

export default function FAQPage() {
  return (
    <PageLayout
      eyebrow="FAQ"
      title={<>Answers to the <em className="italic text-[var(--sage-dark)]">real questions</em>.</>}
      lede="Everything patients and partners ask us most often. If you don't see your question here, we're one email away."
    >
      <FAQ />
    </PageLayout>
  );
}
