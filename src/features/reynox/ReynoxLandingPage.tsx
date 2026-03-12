import { FooterSection, TopNavigation } from "@/features/reynox/layout";
import { QuoteSection } from "@/features/reynox/quote";
import { organizationJsonLd } from "@/features/reynox/schema/organization-json-ld";
import {
  AboutSection,
  DifferentiatorsSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  SocialProofSection,
  ServicesSection,
  TestimonialsSection,
} from "@/features/reynox/sections";

export function ReynoxLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main>
        <TopNavigation />
        <HeroSection />
        <SocialProofSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <QuoteSection />
        <FooterSection />
      </main>
    </>
  );
}
