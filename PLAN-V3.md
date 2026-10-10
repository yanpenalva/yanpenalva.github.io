# Plano V3 — conteúdo e motion minimalista

Base: `PLAN-V2.md` e fontes relevantes lidas. V3 substitui decisões conflitantes da V2. Esta entrega escreve somente o plano; implementação e build pertencem à execução futura. Caminhos abaixo relativos a `src/`, salvo indicação.

## Frente A — conteúdo (A–F) e paridade (H)

**Arquivos:** `data/{experience,projects,business,featured,clients}.js`; `i18n/{en-US,pt-BR}.js`; `views/{HomePage,About}.vue`; `components/home/{FeaturedBento,AIOSSStrip,ExperienceTimeline}.vue`; `components/about/{AboutClients,AboutClientSingle,AboutMe}.vue`; `components/projects/{ProjectSingle,ProjectsGrid}.vue`; `components/business/BusinessProjectsGrid.vue`; `components/reusable/ProofCard.vue`; `components/contact/ContactDetails.vue`; `components/shared/AppFooter.vue`; `assets/images/`.

1. **Experience:** encerrar Netra em `2026-06`, mantendo início `2023-09`. Inserir primeiro `prodeb-senior`, `2026-06→present`, “Senior Software Engineer”, “PRODEB”, “Hybrid”/“Híbrido”; traduzir título e período em PT. Preservar `prodeb` de `2022-02→2023-09`. Tags exatas: `[PHP, Laravel, Vue.js, PostgreSQL, Redis, Docker, Kubernetes, CI/CD]`. Summary EN, exatamente duas frases, replicada fielmente em PT:

   “Working on SIIC v2 architecture and evolution for SECULT-BA, combining backend engineering, modular design and Clean Architecture, DevOps, quality engineering, and AI-assisted development with Docker, Kubernetes, and CI/CD. The roadmap is approximately two months ahead, test coverage exceeds 90%, and an AI/context engineering framework has been adopted across teams.”

2. **Projects:** retirar todos os campos/imports `img` e o `<img>` de `ProjectSingle`; cards somente técnicos, com descrição, metadados e links. Após conferir referências, excluir screenshots órfãos: `phpenalva.png`, `api-rest-full-laravel.png`, `shortener.png`, `neonews.png`, `penpen-deep-focus.png`, `whisper.png` e outras imagens de projetos sem uso. Manter `profile.jpeg`. Eliminar a duplicação de `role` no projeto 18.
3. **Clientes:** remover imports/renders em Home **e About**; excluir `AboutClients.vue`, `AboutClientSingle.vue`, `data/clients.js` e logos órfãos em `assets/images/brands/`. Limpar chaves e metadados sobre clientes; nenhum logo renderizado.
4. **Bento:** referências ordenadas `business:2`, `project:13`, `project:14`, `project:1`: SISTEX, starter-kit-api, starter-kit-frontend, PHPenalva. Grade desktop 2×2 uniforme; mobile uma coluna, sem card dominante atravessando linhas.
5. **About/Business:** remover “Beyond...” e seus computeds/imports/chaves. Reescrever `about.bio1/bio2` EN/PT: seis anos em sistemas corporativos, arquitetura, infraestrutura, desempenho, manutenibilidade e qualidade; contribuições OSS, IA/context engineering, colaboração e comunicação clara. Condensar fielmente, sem novas métricas.
6. **Links/i18n:** auditar todo `:href` em `src/**/*.vue`, incluindo props. Renderizar âncoras somente com URL válida via `v-if`; sem URL, conteúdo estático. Em `ProofCard`, substituir o componente dinâmico por ramos explícitos. Normalizar URLs públicas do Business; referências internas nunca viram links. Proteger `new URL` no AIOSSStrip. Remover fallbacks editoriais crus; completar títulos Business ausentes. Todo texto renderizado, inclusive invariantes, deve resolver pelos dicts; conferir paridade recursiva, sem fallback EN mascarando PT.

**Prompt-resumo:** “Execute A–F/H nos arquivos listados, leia antes de editar, preserve fatos/IDs, remova órfãos somente após busca de referências e valide conteúdo bilíngue.”

## Frente B — motion (G), após aceitar A

**Arquivos:** `App.vue`, `assets/css/app.css`, `components/reusable/ProofCard.vue`, `components/projects/ProjectSingle.vue`, `components/business/BusinessProjectsGrid.vue`; criar `composables/useReveal.js`.

Hover: borda accent e translateY de −2px, 150ms. Rotas: fade/translate sutil, 120–150ms. Reveal via IntersectionObserver nos cards, uma vez, com limpeza ao desmontar e suporte a filtros/remontagens. Conteúdo visível sem observer; separar transforms de reveal/hover. Reduced-motion desativa deslocamentos/transições/reveal, inclusive quando preferência muda. Sem dependências novas.

**Prompt-resumo:** “Implemente motion discreto reutilizável, acessível, sem ocultação permanente ou conflito de transforms.”

## Aceite e verificação futura

Após cada frente: `npm run build` (gera `docs/`), revisar diff. Conferir 360/768/1440px × EN/PT × light/dark; cinco experiências, quatro destaques, 13 projetos, 8 sistemas/5 infra. Verificar teclado/foco, hash routes, busca/filtros, metadados, PDFs/WhatsApp, URLs/destinos sem links mortos; zero imagens em Projects, clientes/logos/Beyond ausentes. Validar paridade completa, ausência de texto cru e reduced-motion; nenhuma biblioteca adicionada.
