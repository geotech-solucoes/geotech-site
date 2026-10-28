import {
  Boxes,
  Database,
  Globe2,
  Layers,
  Map as MapIcon,
  Network,
  Route,
  Share2,
  Smartphone,
  Sparkles,
  Table2,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal, SectionHeader } from "./Reveal";

const PILLARS = [
  {
    tag: "ESPAÇO",
    icon: Globe2,
    text: "Realidades físicas complexas e dinâmicas.",
  },
  {
    tag: "DADOS",
    icon: Database,
    text: "Informações dispersas e pouco estruturadas.",
  },
  {
    tag: "CONEXÃO",
    icon: Network,
    text: "Tecnologia capaz de transformar essas informações em soluções digitais.",
  },
];

const FLOW = ["Espaço real", "Dados", "Geolocalização", "Estrutura", "Software", "Experiência"];

export function WhatIsSection() {
  return (
    <section id="sobre" className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="O que é a Geotech"
          title="Espaços reais são complexos."
          subtitle="Informações importantes estão presentes em todos os lugares, mas nem sempre estão organizadas, conectadas ou acessíveis."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 100}>
              <article className="panel panel-hover h-full p-7">
                <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-mono text-xs tracking-[0.24em] text-primary">{p.tag}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="panel relative overflow-hidden p-6 sm:p-8">
            <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40" />
            <ol className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
              {FLOW.map((step, i) => (
                <li key={step} className="flex items-center gap-3 sm:flex-1">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary " />
                    <span className="text-sm font-medium text-foreground">{step}</span>
                  </div>
                  {i < FLOW.length - 1 ? (
                    <span className="hairline hidden h-px flex-1 sm:block" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const ABOUT_CARDS = [
  {
    code: "GEO",
    title: "Geolocalização",
    text: "Mapas, posicionamento, rotas e representação espacial.",
    icon: MapIcon,
  },
  {
    code: "DATA",
    title: "Dados",
    text: "Estruturação, organização, filtros e integração de informações.",
    icon: Table2,
  },
  {
    code: "TECH",
    title: "Software",
    text: "Aplicativos, plataformas e sistemas capazes de transformar dados em experiências digitais.",
    icon: Boxes,
  },
];

export function AboutSection() {
  return (
    <section className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Sobre a Geotech"
          title="Geotecnologia, dados e software."
          subtitle="Somos uma empresa especializada em desenvolver soluções digitais para organizar, conectar e representar informações de espaços reais."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal key={c.code} delay={i * 100}>
              <article className="panel panel-hover group relative h-full overflow-hidden p-7">
                <span className="absolute right-5 top-5 font-mono text-xs tracking-[0.2em] text-primary/60">
                  {c.code}
                </span>
                <c.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="hairline mt-7 block h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12">
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-md items-start justify-between px-4">
              {["GEO", "DATA", "TECH"].map((k) => (
                <span key={k} className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  {k}
                </span>
              ))}
            </div>
            <svg
              viewBox="0 0 400 70"
              aria-hidden="true"
              className="w-full max-w-md text-primary"
              fill="none"
            >
              <path
                d="M20 5V30Q20 45 120 48H200M200 48H280Q380 45 380 30V5M200 5V48"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.3"
              />
              <circle cx="200" cy="55" r="4" fill="currentColor" className="animate-node" />
            </svg>
            <p className="font-display text-2xl font-bold tracking-[0.3em] text-foreground sm:text-3xl">
              GEOTECH
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Service = { title: string; text: string; icon: LucideIcon };

const SERVICES: Service[] = [
  {
    title: "Desenvolvimento de Plataformas Web e Aplicações Mobile",
    text: "Criação de sistemas, plataformas web e aplicações mobile sob medida.",
    icon: Smartphone,
  },
  {
    title: "Modelagem e Análise Espacial",
    text: "Transformação de dados geográficos em informações úteis para análise e tomada de decisão.",
    icon: Layers,
  },
  {
    title: "Integração de Dados Espaciais",
    text: "Integração, organização e relacionamento de diferentes fontes de dados geográficos.",
    icon: Share2,
  },
  {
    title: "Engenharia e Desenvolvimento de APIs Customizadas",
    text: "Desenvolvimento de APIs robustas, escaláveis e integradas às necessidades do negócio.",
    icon: Network,
  },
  {
    title: "Cartografia Digital e Integração Dinâmica de Mapas",
    text: "Construção de mapas digitais, camadas geográficas e experiências cartográficas interativas.",
    icon: MapIcon,
  },
  {
    title: "Arquitetura e Migração de Bancos de Dados Geográficos",
    text: "Estruturação, otimização e migração de bancos de dados geográficos utilizando tecnologias como PostgreSQL e PostGIS.",
    icon: Database,
  },
  {
    title: "Desenvolvimento de Dashboards Interativos e Geointeligência",
    text: "Criação de dashboards e ferramentas para visualização, análise e interpretação de dados espaciais.",
    icon: Sparkles,
  },
  {
    title: "Algoritmos de Roteirização e Otimização Logística",
    text: "Desenvolvimento de soluções para rotas, mobilidade, logística e otimização espacial.",
    icon: Route,
  },
  {
    title: "Assessoria Técnica",
    text: "Apoio técnico para planejamento, desenvolvimento, implantação e evolução de soluções tecnológicas.",
    icon: Workflow,
  },
  {
    title: "Consultoria em Infraestrutura de Dados Espaciais",
    text: "Planejamento e estruturação de ambientes para organização, integração e utilização de dados espaciais.",
    icon: Boxes,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative border-t border-border py-28 sm:py-40">
      <div className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title="Nossos serviços"
          subtitle="Tecnologia aplicada a dados, espaços e negócios."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 90}>
              <article className="panel panel-hover group h-full p-6">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-2 transition-colors duration-500 group-hover:border-border-strong">
                  <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold leading-snug text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-5 block font-mono text-[10px] tracking-[0.2em] text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
