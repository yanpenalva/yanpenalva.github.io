# Portfolio

A static single-page portfolio for software engineering experience and selected work.

**Live site:** [https://www.penalva.me](https://www.penalva.me)

## Overview

The site presents home, about, projects, business projects, and contact views. It is a static SPA with client-side routing through Vue Router.

## Index

1. [Stack](#stack)
2. [Quickstart](#quickstart)
3. [Structure](#structure)
4. [i18n](#i18n)
5. [Themes](#themes)
6. [Deploy](#deploy)
7. [Conventions](#conventions)

## Stack

| Layer | Technology | Version |
| --- | --- | --- |
| Runtime | Node.js | >=18.0.0 |
| UI | Vue | 3.2.47 |
| Routing | Vue Router | 4.1.6 |
| Build | Vite | 6.4.3 |
| Styles | Tailwind CSS | 3.3.0 |
| CSS processing | PostCSS | 8.4.21 |
| CSS compatibility | Autoprefixer | 10.4.14 |
| Linting | ESLint + eslint-plugin-vue | 8.38.0 + 9.6.0 |
| Vue build plugin | @vitejs/plugin-vue | 5.2.4 |

## Quickstart

Prerequisites: Node.js >=18.0.0 and npm.

```bash
git clone git@github.com:yanpenalva/yanpenalva.github.io.git
cd yanpenalva.github.io
npm ci
npm run dev
```

The development server runs on port `5000`. Build the site into `docs/` with `npm run build`, then preview the production build with `npm run serve`.

## Structure

```text
src/
├── App.vue, main.js
├── assets/                 # CSS, GeneralSans fonts, logos, profile image
├── components/
│   ├── about/              # AboutCounter, AboutCredentials, AboutMe
│   ├── business/           # ArchitectureNotes, BusinessProjectsGrid
│   ├── contact/            # ContactDetails, ContactHiring
│   ├── home/               # AIOSSStrip, ContactCTA, ExperienceTimeline,
│   │                       # FeaturedBento, HomeMetrics, ResultCases
│   ├── icons/              # IconBase and brand/UI icons
│   ├── projects/           # ProjectSingle, ProjectsFilter, ProjectsGrid
│   ├── reusable/           # CustomButton, ProofCard, ResumeLinks
│   └── shared/             # AppBanner, AppFooter, AppHeader, FooterCopyright
├── composables/            # useLocale, useReveal, useTheme, useWhatsApp
├── data/                   # Portfolio content grouped by section
├── i18n/                   # en-US.js, pt-BR.js
├── router/                 # index.js
├── utils/                  # urls.js
└── views/                  # HomePage, About, ProjectSection, BusinessProjects,
                            # Contact, NotFound
```

The `@` alias resolves to `src/`.

## i18n

English (`en-US`) is the default locale, with Portuguese (`pt-BR`) also available. Locale selection uses `useLocale` and `LanguageSwitcher`; localized content is in `src/i18n`.

## Themes

Dark and light themes use Tailwind's class-based dark mode, `useTheme`, and `ThemeSwitcher`. CSS-variable color tokens cover canvas, surface, border, text, muted, accent, and on-accent colors.

## Deploy

`vite build` emits the static site to `docs/`, as configured by `build.outDir` in `vite.config.js`. The `docs/` directory is the committed GitHub Pages build output.

## Conventions

- Use Vue's Composition API and the existing component-per-section layout.
- ESLint extends `plugin:vue/vue3-recommended` and `eslint:recommended`.
- Use lowercase Conventional Commit messages.

## License

MIT
