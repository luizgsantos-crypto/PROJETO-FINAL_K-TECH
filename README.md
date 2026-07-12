# K-Tech | Site Institucional (Angular)

Site oficial da startup **K-Tech** — ecossistema IoT assistivo formado pela bengala
inteligente **A.T.L.A.S.** e pela luva háptica **L.I.V.I.A.**

> **PROPRIETARY AND CONFIDENTIAL**
> Copyright (c) 2026 Luiz Gabriel Silva Brito Santos (K-Tech). Todos os direitos reservados.
> Processo INPI: BR 20 2026 012104 0
> Código disponibilizado **estritamente para avaliação acadêmica (SENAI)**.
> É proibida a cópia, modificação, distribuição ou uso comercial sem autorização
> prévia e por escrito do fundador da K-Tech.

---

## 🚀 Como rodar o projeto (passo a passo)

Pré-requisitos: **Node.js 18.19+ (recomendado Node 20)** instalado.

```bash
# 1. Entre na pasta do projeto
cd k-tech-angular

# 2. Instale as dependências (só na primeira vez)
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

O navegador abrirá automaticamente em **http://localhost:4200**.

Para gerar a versão de produção:

```bash
npm run build
# os arquivos finais ficam em dist/k-tech-site
```

---

## 🧰 Tecnologias utilizadas

| Tecnologia | Função |
|---|---|
| **Angular 18** (standalone components) | Framework principal |
| **TypeScript** | Lógica tipada dos componentes |
| **Tailwind CSS 3** | Estilização (mesmo visual do design do Figma) |
| **lucide-angular** | Ícones (mesma biblioteca visual do código React original) |
| **IntersectionObserver** | Animações de "revelar ao rolar" (substitui o framer-motion) |

---

## 📁 Arquitetura de pastas (como fica no VS Code)

```
k-tech-angular/
├── angular.json               → Configuração do Angular CLI
├── package.json               → Dependências e scripts
├── tailwind.config.js         → Cores da marca (ktech-dark, ktech-teal, ktech-cyan...)
├── tsconfig.json              → Configuração do TypeScript
└── src/
    ├── index.html             → Página base (fonte Inter, metadados, SEO)
    ├── main.ts                → Ponto de entrada da aplicação
    ├── styles.css             → Tailwind + animações globais (substituem o framer-motion)
    └── app/
        ├── app.component.ts   → Componente raiz
        ├── app.config.ts      → Rotas + registro central dos ícones Lucide
        ├── app.routes.ts      → Definição das rotas
        │
        ├── components/        → Componentes reutilizáveis (fragmentação do React)
        │   ├── carousel/          → Carrossel de imagens (Hero)
        │   │   ├── carousel.component.ts    (a "inteligência")
        │   │   ├── carousel.component.html  (a "tela")
        │   │   └── carousel.component.css
        │   ├── login-modal/       → Modal "Portal do Cliente"
        │   ├── cookie-banner/     → Banner de cookies (LGPD)
        │   └── pricing-card/      → Cartão de plano (LITE / PRO / DELUXE)
        │
        ├── pages/
        │   └── home/              → Página principal (Navbar, Hero, Ecossistema,
        │                            Comparar Modelos, História, FAQ, Segurança,
        │                            Contato B2B e Footer)
        │
        └── shared/
            ├── directives/
            │   └── reveal-on-scroll.directive.ts  → Animação ao rolar a página
            └── models/
                └── site.models.ts                 → Interfaces (tipagem dos dados)
```

---

## 🔄 O que mudou na conversão React → Angular

| No React (arquivo único .tsx) | No Angular (separado) |
|---|---|
| `useState(...)` | Propriedades de classe (`mobileMenuOpen = false`) |
| `useEffect` + `setInterval` | `ngOnInit` / `ngOnDestroy` no CarouselComponent |
| Props (`{ isOpen, onClose }`) | `@Input()` e `@Output()` com `EventEmitter` |
| `framer-motion` (animações) | Animações CSS + diretiva `appRevealOnScroll` |
| `lucide-react` | `lucide-angular` (mesmos ícones) |
| HTML misturado com a lógica | `.ts` (inteligência) separado do `.html` (tela) |
| Cores fixas `#45A29E` espalhadas | Cores nomeadas no `tailwind.config.js` |

## ✨ Melhorias aplicadas em relação ao código original

- **Tipagem forte**: todas as estruturas (planos, FAQ, slides) têm interfaces em `site.models.ts`;
- **Componentes reutilizáveis**: um único `CarouselComponent` genérico e um único `PricingCardComponent` que recebe o plano inteiro por `@Input`, eliminando repetição;
- **Dados separados do visual**: os 9 planos, o FAQ e os recursos do ecossistema viraram arrays no `.ts` — para alterar um preço, basta editar uma linha;
- **Acessibilidade**: `aria-label` nos botões de navegação e `aria-expanded` no FAQ;
- **Limpeza de memória**: o autoplay do carrossel é encerrado no `ngOnDestroy`;
- **Cabeçalho de propriedade intelectual** em todos os arquivos de código.
