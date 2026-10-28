import { Database, Layers, MapPin, Server, Smartphone } from "lucide-react";

import { GeoMap } from "./GeoMap";
import { Reveal, SectionHeader } from "./Reveal";

const PROJECT_TOPICS = [
  { title: "Mapa", text: "Representação espacial da feira.", icon: MapPin },
  { title: "Dados", text: "Organização das informações.", icon: Database },
  { title: "Experiência", text: "Acesso às informações através do aplicativo.", icon: Smartphone },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Projetos" title="Projetos que transformam espaços reais." />

        <Reveal delay={100} className="mt-14">
          <article className="panel overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              <div className="p-7 sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  CASE EM DESENVOLVIMENTO
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Aqui na Feira
                </h3>
                <p className="mt-3 text-lg text-primary">
                  Tecnologia para compreender e conectar uma das maiores feiras do Brasil.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Desenvolvido em parceria com a Prefeitura de Caruaru, o projeto busca digitalizar e
                  organizar informações da Feira de Caruaru através de geolocalização e tecnologia.
                </p>

                <ul className="mt-9 grid gap-4 sm:grid-cols-3">
                  {PROJECT_TOPICS.map((t) => (
                    <li key={t.title} className="rounded-lg border border-border bg-surface-2/60 p-4">
                      <t.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h4 className="mt-3 font-display text-sm font-bold text-foreground">
                        {t.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[340px] border-t border-border bg-surface-2/40 p-6 lg:border-l lg:border-t-0">
                <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-50" />
                <div className="relative flex h-full items-center justify-center gap-6">
                  <GeoMap className="absolute inset-0 h-full w-full opacity-70" />
                  <div className="relative w-40 rounded-[1.6rem] border border-border-strong bg-background/90 p-2 shadow-[var(--shadow-elevated)] sm:w-48">
                    <div className="rounded-[1.2rem] border border-border bg-surface p-3">
                      <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
                      <p className="font-mono text-[9px] tracking-[0.2em] text-primary">
                        AQUI NA FEIRA
                      </p>
                      <div className="mt-3 aspect-square rounded-md border border-border grid-bg-fine">
                        <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full">
                          <polygon
                            points="20,30 60,18 78,52 44,78 18,62"
                            fill="var(--color-primary)"
                            fillOpacity="0.15"
                            stroke="var(--color-primary)"
                            strokeOpacity="0.6"
                          />
                          <circle cx="45" cy="48" r="3" fill="var(--color-primary)" className="animate-node" />
                          <path
                            d="M20 80L45 48 78 30"
                            fill="none"
                            stroke="var(--color-primary)"
                            strokeOpacity="0.6"
                            className="animate-dash"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-3/4 rounded bg-muted" />
                        <div className="h-2 w-1/2 rounded bg-muted" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="relative mt-4 text-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  ESPAÇO RESERVADO PARA SCREENSHOTS
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {["Projeto em breve", "Projeto em breve"].map((label, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="panel panel-hover flex min-h-[180px] items-center justify-center border-dashed p-8">
                <div className="text-center">
                  <Layers className="mx-auto h-6 w-6 text-primary/60" aria-hidden="true" />
                  <p className="mt-3 font-display text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    PLACEHOLDER EDITÁVEL
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "COMPREENDER", text: "Conhecer o espaço e seus processos." },
  { n: "02", title: "ORGANIZAR", text: "Identificar e estruturar as informações." },
  { n: "03", title: "LOCALIZAR", text: "Relacionar dados ao espaço físico." },
  { n: "04", title: "CONECTAR", text: "Transformar tudo isso em uma solução digital." },
];

export function MethodologySection() {
  return (
    <section className="relative border-t border-border py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Metodologia"
          title="Transformamos informações dispersas em uma estrutura digital."
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 110}>
              <div className="panel panel-hover relative h-full p-6">
                <span className="font-display text-4xl font-bold text-primary/25">{s.n}</span>
                <h3 className="mt-4 font-mono text-xs tracking-[0.22em] text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="absolute -top-px left-6 right-6 h-px bg-primary/40" />
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120} className="mt-12">
          <blockquote className="relative overflow-hidden rounded-xl border border-border-strong bg-surface/60 p-8 text-center sm:p-12">
            <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40" />
            <p className="relative font-display text-xl font-bold leading-snug text-foreground sm:text-3xl">
              “Antes de digitalizar um espaço, precisamos entender como ele funciona.”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

const LAYERS = [
  { tag: "APLICAÇÃO", value: "React Native", icon: Smartphone },
  { tag: "API", value: "NestJS", icon: Server },
  { tag: "DADOS ESPACIAIS", value: "PostgreSQL / PostGIS / GIS", icon: Database },
  { tag: "MAPA & GEO", value: "MapLibre / GeoJSON", icon: MapPin },
];

const CAPABILITIES = [
  "GIS",
  "Geolocalização",
  "APIs",
  "Mapas interativos",
  "Dados espaciais",
  "Desenvolvimento mobile",
  "Arquitetura de software",
  "Estruturação de dados",
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="relative border-t border-border py-28 sm:py-40">
      <div className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Tecnologia" title="Construída sobre dados e geotecnologia." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <ul className="space-y-3">
              {LAYERS.map((l, i) => (
                <li key={l.tag} className="relative">
                  <div className="panel panel-hover flex items-center gap-5 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-surface-2">
                      <l.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.22em] text-primary">{l.tag}</p>
                      <p className="mt-1 font-display text-base font-bold text-foreground">
                        {l.value}
                      </p>
                    </div>
                    <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                      L{i + 1}
                    </span>
                  </div>
                  {i < LAYERS.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mx-auto block h-3 w-px bg-primary/40"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel h-full p-7">
              <p className="eyebrow">Capacidades</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {CAPABILITIES.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-surface-2/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-primary"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <GeoMap className="aspect-[4/3] opacity-80" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Da infraestrutura e dos dados até a experiência final do usuário — uma arquitetura
                  conectada em camadas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
