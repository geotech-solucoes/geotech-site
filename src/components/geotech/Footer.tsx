import { Logo } from "./Navbar";

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Contato", href: "#contato" },
];

export async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Soluções inteligentes para negócios dinâmicos.
          </p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground/80">
            Tecnologia para espaços reais.
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-primary">
            CARUARU • PERNAMBUCO
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="grid grid-cols-2 gap-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-5 pt-6 sm:px-8">
        <p className="font-mono text-[11px] text-muted-foreground">
          © {year} GEOTECH. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}