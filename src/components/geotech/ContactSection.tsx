"use client"
import { ArrowRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

import { GeoMap } from "./GeoMap";
import { Reveal, SectionHeader } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative border-t border-border py-28 sm:py-40">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-gradient text-3xl font-bold leading-tight sm:text-5xl">
            Seu espaço também pode se tornar uma solução digital.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Vamos transformar dados, lugares e necessidades em soluções inteligentes.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Fale com a Geotech
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-border-strong hover:text-primary"
            >
              Conheça nossos projetos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SOCIALS = [
  { label: "LinkedIn", value: "/company/geotech", icon: Linkedin, href: "#" },
  { label: "Instagram", value: "@geotech", icon: Instagram, href: "#" },
  { label: "GitHub", value: "github.com/geotech", icon: Github, href: "#" },
  { label: "E-mail", value: "contato@geotech.com.br", icon: Mail, href: "#" },
  { label: "WhatsApp", value: "(00) 00000-0000", icon: MessageCircle, href: "#" },
];

const FIELD =
  "w-full rounded-md border border-input bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-border-strong focus:outline-none";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="relative border-t border-border py-28 sm:py-40">
      <div className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Contato" title="Vamos construir algo juntos." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="panel space-y-4 p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="mb-2 block text-xs text-muted-foreground">
                    Nome
                  </label>
                  <input id="nome" name="nome" required placeholder="Seu nome" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="empresa" className="mb-2 block text-xs text-muted-foreground">
                    Empresa / Organização
                  </label>
                  <input id="empresa" name="empresa" placeholder="Nome da organização" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="mb-2 block text-xs text-muted-foreground">
                    Telefone
                  </label>
                  <input id="telefone" name="telefone" placeholder="(00) 00000-0000" className={FIELD} />
                </div>
              </div>

              <div>
                <label htmlFor="tipo" className="mb-2 block text-xs text-muted-foreground">
                  Tipo de projeto
                </label>
                <select id="tipo" name="tipo" className={FIELD} defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option>Plataforma web</option>
                  <option>Aplicativo mobile</option>
                  <option>Mapas e cartografia digital</option>
                  <option>Dados espaciais e GIS</option>
                  <option>APIs e integrações</option>
                  <option>Consultoria / assessoria técnica</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-2 block text-xs text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  placeholder="Conte um pouco sobre o seu espaço e o seu desafio."
                  className={FIELD}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Enviar mensagem
                <ArrowRight className="h-4 w-4" />
              </button>

              <p aria-live="polite" className="text-xs text-primary">
                {sent ? "Mensagem registrada. Em breve entraremos em contato." : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel h-full p-7">
              <p className="eyebrow">Canais</p>
              <ul className="mt-5 space-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="flex items-center gap-4 rounded-lg border border-border px-4 py-3 transition-colors hover:border-border-strong"
                    >
                      <s.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-sm text-foreground">{s.label}</span>
                      <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                        {s.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-6">
                <GeoMap className="aspect-[4/3] opacity-70" />
                <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  CARUARU • PERNAMBUCO
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
