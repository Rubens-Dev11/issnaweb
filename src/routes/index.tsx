import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/home/HeroSlider";
import { StatsSection } from "@/components/home/StatsSection";
import { FilieresSection } from "@/components/home/FilieresSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { NewsSection } from "@/components/home/NewsSection";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
      <StatsSection />
      <div className="reveal">
        <FilieresSection />
      </div>
      <div className="reveal">
        <WhyUsSection />
      </div>
      <div className="reveal">
        <TestimonialsSection />
      </div>
      <div className="reveal">
        <PartnersSection />
      </div>
      <div className="reveal">
        <NewsSection />
      </div>
      <div className="reveal">
        <FinalCta />
      </div>
    </div>
  );
}
