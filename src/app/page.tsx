import type { Metadata } from "next";

import { ContactSection, FinalCta } from "@/components/geotech/ContactSection";
import { Footer } from "@/components/geotech/Footer";
import { Hero } from "@/components/geotech/Hero";
import { Navbar } from "@/components/geotech/Navbar";
import { AboutSection, ServicesSection, WhatIsSection } from "@/components/geotech/SectionsIntro";
import {
  ApplicationsSection,
  DifferentiatorSection,
  EvolutionSection,
  TeamSection,
} from "@/components/geotech/SectionsMore";
import {
  MethodologySection,
  ProjectsSection,
  TechnologySection,
} from "@/components/geotech/SectionsWork";

const TITLE = "GEOTECH - Tecnologia para espaços reais";
const DESCRIPTION =
  "Geotecnologia, dados espaciais e engenharia de software. Plataformas web, apps, mapas digitais, GIS e dashboards de geointeligência.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GEOTECH",
  slogan: "Soluções inteligentes para negócios dinâmicos.",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caruaru",
    addressRegion: "PE",
    addressCountry: "BR",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <div className="surface-paper bg-background text-foreground">
            <WhatIsSection />
          </div>
          <div className="surface-mist bg-background text-foreground">
            <AboutSection />
          </div>
          <div className="surface-graphite bg-background text-foreground">
            <ServicesSection />
          </div>
          <ProjectsSection />
          <div className="surface-paper bg-background text-foreground">
            <MethodologySection />
          </div>
          <div className="surface-graphite bg-background text-foreground">
            <TechnologySection />
          </div>
          <div className="surface-mist bg-background text-foreground">
            <ApplicationsSection />
          </div>
          <div className="surface-paper bg-background text-foreground">
            <EvolutionSection />
          </div>
          <DifferentiatorSection />
          <div className="surface-mist bg-background text-foreground">
            <TeamSection />
          </div>
          <FinalCta />
          <div className="surface-paper bg-background text-foreground">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}