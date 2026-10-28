import {
  Building2,
  CalendarRange,
  Compass,
  Landmark,
  Navigation,
  Palmtree,
  Store,
  Truck,
} from "lucide-react";

import { Reveal, SectionHeader } from "./Reveal";

const AREAS = [
  { label: "Cidades inteligentes", icon: Building2 },
  { label: "Mobilidade", icon: Navigation },
  { label: "Turismo", icon: Palmtree },
  { label: "Comércio", icon: Store },
  { label: "Eventos", icon: CalendarRange },
  { label: "Logística", icon: Truck },
  { label: "Gestão pública", icon: Landmark },
  { label: "Aplicativos personalizados", icon: Compass },
];

export function ApplicationsSection() {
  return (
    <section id="aplicacoes" className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Aplicações"
          title="Onde podemos aplicar essa tecnologia?"
          subtitle="Organizar espaços reais é apenas o começo."
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {AREAS.map((a, i) => (
              <Reveal as="li" key={a.label} delay={(i % 2) * 80}>
                <div className="panel panel-hover flex items-center gap-4 p-5">
                  <a.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <div className="panel relative overflow-hidden p-6">
              <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-50" />
              <svg viewBox="0 0 320 320" aria-hidden="true" className="relative w-full">
                <circle cx="160" cy="160" r="120" fill="none" stroke="var(--color-primary)" strokeOpacity="0.15" />
                <circle cx="160" cy="160" r="80" fill="none" stroke="var(--color-primary)" strokeOpacity="0.2" />
                <circle cx="160" cy="160" r="40" fill="none" stroke="var(--color-primary)" strokeOpacity="0.3" />
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = 160 + Math.cos(angle) * 120;
                  const y = 160 + Math.sin(angle) * 120;
                  return (
                    <g key={i}>
                      <line
                        x1="160"
                        y1="160"
                        x2={x}
                        y2={y}
                        stroke="var(--color-primary)"
                        strokeOpacity="0.35"
                        className="animate-dash"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="var(--color-primary)"
                        className="animate-node"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    </g>
                  );
                })}
                <polygon
                  points="160,120 200,160 160,200 120,160"
                  fill="var(--color-primary)"
                  fillOpacity="0.25"
                  stroke="var(--color-primary)"
                />
              </svg>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-10">
          <p className="rounded-xl border border-border-strong bg-primary/5 p-7 text-center font-display text-lg font-semibold text-foreground sm:text-2xl">
            Cada espaço possui necessidades diferentes. A tecnologia precisa se adaptar a ele.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const PROGRESSION = ["LOCALIZAÇÃO", "MAPEAMENTO", "DADOS", "GESTÃO", "INTELIGÊNCIA"];

export function EvolutionSection() {
  return (
    <section className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Evolução" title="Estruturar um espaço é apenas o começo." />

        <Reveal delay={100} className="mt-12">
          <ol className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
            {PROGRESSION.map((p, i) => (
              <li key={p} className="flex flex-1 items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary">{p}</span>
                {i < PROGRESSION.length - 1 ? (
                  <span className="hairline hidden h-px flex-1 sm:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="panel h-full p-7">
              <p className="eyebrow">Hoje</p>
              <ul className="mt-5 space-y-3">
                {["Mapas", "Localização", "Filtros", "Informações"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-soft" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="panel h-full border-border-strong p-7">
              <p className="eyebrow">Futuro</p>
              <ul className="mt-5 space-y-3">
                {["Indicadores", "Gestão", "Integração", "Análise", "Novos serviços"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quanto mais estruturadas as informações de um espaço, maiores são as possibilidades de
            criar novas soluções.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const CHAIN = ["Realidade", "Dados", "Geotecnologia", "Software", "Experiência"];
const HIGHLIGHTS = [
  "Visão sistêmica",
  "Engenharia de software",
  "Geotecnologia",
  "Dados espaciais",
  "Soluções personalizadas",
];

export function DifferentiatorSection() {
  return (
    <section className="relative border-t border-border py-28 sm:py-40">
      <div className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Diferencial"
          title="Do espaço real à solução digital."
          subtitle="Não desenvolvemos apenas sistemas. Estruturamos informações, conectamos dados ao espaço e transformamos essa estrutura em tecnologia."
        />

        <Reveal delay={100} className="mt-12">
          <ol className="grid gap-3 sm:grid-cols-5">
            {CHAIN.map((c, i) => (
              <li key={c} className="panel panel-hover p-5 text-center">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-sm font-bold text-foreground">{c}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="rounded-full border border-border-strong bg-primary/5 px-4 py-2 text-sm text-primary"
              >
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Nome do integrante",
    role: "Engenharia de Software",
    stack: ["TypeScript", "NestJS", "React"],
    text: "Descrição curta sobre a atuação do integrante dentro dos projetos da Geotech.",
    initials: "GT",
  },
  {
    name: "Nome do integrante",
    role: "Geotecnologia & GIS",
    stack: ["PostGIS", "QGIS", "GeoJSON"],
    text: "Descrição curta sobre a atuação do integrante dentro dos projetos da Geotech.",
    initials: "GT",
  },
  {
    name: "Nome do integrante",
    role: "Mobile & Experiência",
    stack: ["React Native", "MapLibre", "UI/UX"],
    text: "Descrição curta sobre a atuação do integrante dentro dos projetos da Geotech.",
    initials: "GT",
  },
  {
    name: "Nome do integrante",
    role: "Dados & Infraestrutura",
    stack: ["PostgreSQL", "Docker", "APIs"],
    text: "Descrição curta sobre a atuação do integrante dentro dos projetos da Geotech.",
    initials: "GT",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Equipe"
          title="Um time construindo soluções de ponta a ponta."
          subtitle="Especialidades diferentes, atuação integrada e mentalidade full-stack em todas as camadas do produto."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={m.role} delay={i * 90}>
              <article className="panel panel-hover h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-border-strong bg-surface-2 font-mono text-xs tracking-widest text-primary">
                  {m.initials}
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm text-primary">{m.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.text}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {m.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
