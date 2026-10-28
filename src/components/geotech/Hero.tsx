import { ArrowRight, MessageSquare } from "lucide-react";

import { GeoMap } from "./GeoMap";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              Geotecnologia • Dados • Software
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-gradient text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Tecnologia para espaços reais.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-display text-xl font-medium text-primary sm:text-2xl">
              Soluções inteligentes para negócios dinâmicos.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Unimos engenharia de software de alta performance e geotecnologia avançada para
              projetar, desenvolver e escalar soluções robustas.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--color-primary)]"
              >
                Conheça nosso trabalho
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-border-strong hover:text-primary"
              >
                <MessageSquare className="h-4 w-4" />
                Fale conosco
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["GIS", "Geointeligência"],
                ["API", "Engenharia"],
                ["APP", "Experiência"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-xs tracking-[0.2em] text-primary">{k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="panel animate-float relative overflow-hidden p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>layer / basemap</span>
              <span className="text-primary">live</span>
            </div>
            <GeoMap className="aspect-[6/5]" />
            <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
