# GEOTECH — Landing Page

Landing page oficial da **GEOTECH**, empresa de geotecnologia, dados espaciais e engenharia de software, sediada em Caruaru, Pernambuco.

> Tecnologia para espaços reais.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack, Cache Components)
- [React](https://react.dev/) 19 e TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [lucide-react](https://lucide.dev/) para ícones
- `next/font` com Space Grotesk, IBM Plex Sans e IBM Plex Mono

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
git clone https://github.com/geotech-solucoes/geotech-site.git
cd geotech-site
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando         | O que faz                                 |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento               |
| `npm run build` | Build de produção (também checa os tipos) |
| `npm run start` | Roda o build de produção                  |
| `npm run lint`  | Executa o ESLint                          |

### Acessando pelo IP da rede (celular, outros PCs)

No modo dev, o Next bloqueia acessos que não vêm de `localhost`. A lista de origens liberadas fica em `allowedDevOrigins` no `next.config.ts`. Se o seu IP não estiver coberto, adicione-o lá e reinicie o `npm run dev`.

## Estrutura

```
public/                    arquivos estáticos (robots.txt)
src/
├── app/
│   ├── layout.tsx         layout raiz, fontes e metadata global
│   ├── page.tsx           página inicial, metadata e JSON-LD
│   ├── globals.css        design system (cores, utilitários, animações)
│   └── icon.svg           favicon
├── components/geotech/    seções da landing (Hero, Serviços, Projetos, etc.)
└── lib/utils.ts           helper `cn` para classes
```

## Design system

Todo o visual é definido em `src/app/globals.css`:

- Cores em `oklch`, via variáveis CSS. Evite cores fixas nos componentes.
- Superfícies alternadas por seção: `surface-paper`, `surface-mist` e `surface-graphite`.
- Utilitários próprios: `panel`, `eyebrow`, `grid-bg`, `reveal`, `animate-*`.
- Animações respeitam `prefers-reduced-motion`.

## Pendências de conteúdo

Itens que ainda são provisórios no site:

- Seção **Equipe**: nomes e descrições dos integrantes.
- **Redes sociais e contato**: links, e-mail e WhatsApp em `ContactSection.tsx`.
- **Aqui na Feira**: screenshots reais no lugar do espaço reservado.
- **Formulário de contato**: ainda não envia a mensagem para nenhum destino.
- **Domínio**: definir o `metadataBase` no `layout.tsx` e adicionar URL canônica e Open Graph.

## Licença

Software proprietário. Todos os direitos reservados. Veja o arquivo [LICENSE](./LICENSE).
