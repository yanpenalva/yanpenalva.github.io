# Plano-mestre V2 — minimalismo editorial

## Direção e arquitetura
Base: `PLAN.md` e implementação atual lidas. Esta etapa escreve somente este plano; build fica para execução. Preservar Vue/Tailwind/Vite, hash history, publicação main/docs, bios, foto, cinco logos e PDFs.

Trocar a composição centralizada e caixas repetitivas por editorial assimétrico: identidade tipográfica gigante, espaço negativo, divisórias e evidências claras. Tokens light/dark: canvas #F5F4EF/#101110; surface #FFFFFF/#191B19; text #171917/#F5F4EF; muted #555B55/#B4BAB4; border #CDD1C9/#424842; accent #275C37/#A8E66B; on-accent #FFFFFF/#101110. Contraste AA obrigatório. GeneralSans variável local como única sans; mono de sistema para metadados. Corpo 16–18px, títulos 32–48px, hero clamp(48px,8vw,104px), entrelinha 1,05; largura 1160px; escala 8/16/24/40/64/96px; raios 4–8px; sem sombras/gradientes; transições 150ms e reduced-motion.

Header em uma linha: marca Yan Penalva, navegação, idioma/tema; mobile com menu acessível. Hero alinhado à esquerda: nome, proposta bilíngue sobre sistemas web/IA/código aberto, contato primário, CVs secundários. Cards tipográficos com stack, descrição e links explícitos; imagens existentes opcionais, novos itens sem screenshots inventados. Footer compacto, horizontal/quebrável, redes nomeadas e WhatsApp.

Home: hero → faixa discreta 6 anos/20+ e tecnologias → bento SISTEX dominante + starter-kit-api + PHPenalva → faixa IA/OSS (frontend, Whisper, três novos itens) → timeline profissional → cinco logos sem caixas pesadas → CTA amplo → footer. Desktop bento 7/5 colunas com dominante ocupando duas linhas; mobile sequencial. Catálogos seguem acessíveis nas rotas atuais.

## Mapa final de dados
`projects.js`: 13 entradas. Manter 1 PHPenalva, 5 API Laravel IBGE, 8 PHPenalva URL Shortener, 9 Suitability, 11 PenPen, 12 Whisper. Remover 2/3/4/6/7/10; não reutilizar IDs. Adicionar:
- 13 starter-kit-api: PHP; API Application; “Laravel REST API starter kit with authentication, RBAC, testing, and observability.”
- 14 starter-kit-frontend: TypeScript; Web Application; “Vue 3 starter kit with Vue, Quasar, TypeScript, and automated testing.”
- 15 log-anomaly-detector: PHP; AI Applications; “Log anomaly detection with PHP, Flight and PHP-ML using machine learning and clustering techniques.”
- 16 anki-lingo: Python; AI Applications; “AI-powered daily English flashcards automatically generated and synced with Anki.”
- 17 context-spec-develop: AI Applications; “Installable, agent-neutral context and delivery workflow for AI coding agents.” Sem linguagem presumida.
- 18 1º Protesto São Luís: Web Application; site institucional do 1º Tabelionato de Protesto de São Luís-MA; Laravel 13/Inertia 3/Vue 3/TypeScript/Tailwind 4; Developer/Desenvolvedor; https://www.1protestodesaoluis.com.br/.
- 19 NeoNews: Web Application; https://www.neosnews.com.br/; “News portal hosting the Suitability appraisal application.” / “Portal de notícias que hospeda a aplicação de avaliação Suitability.” Usar apenas isso; detalhes adicionais carecem de confirmação.

13–16: href `https://github.com/yanpenalva/<nome>`; 17: https://www.npmjs.com/package/@owlcodium/context-spec-develop. 9: href https://github.com/Owl-Codium/suitability-system; `deploy` https://www.neosnews.com.br/ com ação secundária traduzida, sem links aninhados.

`business.js`: systems 1–7 preservados; SISPPPG continua no catálogo, marcado fora de produção. Adicionar 8 SIIC, Prodeb: “Sistema de Informações e Indicadores Culturais da SECULT Bahia” / “Cultural information and indicators system for Bahia's SECULT”; Laravel 13/TypeScript/Vue; https://siic.cultura.ba.gov.br/; status in-development, sem papel/datas. Infra 1–5 preservada. Normalizar href/status explícitos; substituir chamada genérica “atualmente em produção”.

`featured.js`: business:2, project:13, project:1. `experience.js`: substituir agrupamentos temáticos por Netra Tecnologia, Software Engineer, remoto, 2023-09–atual (Laravel/Vue/PostgreSQL, +45% API, CI/CD/Kubernetes); PRODEB, Software Engineer, híbrido, 2022-02–2023-09 (Laravel/Vue/PostgreSQL/Redis, microsserviços); Grupo Ramiro Campelo, Junior, presencial, 2021-11–2022-02 (e-commerce/PHP); TRT5, Intern, remoto, 2020-08–2021-11 (segurança/Python). Datas localizadas. Manter 6/20+: seis anos desde agosto/2020 em outubro/2026; 20+ já existente, não contagem do catálogo.

Dicts EN/PT: remover projects.items 2/3/4/6/7/10, preservar demais, adicionar 13–19 com traduções completas. Acrescentar experience por ID, business títulos/papéis/status, labels de métricas/evidências/localização/ARIA. Eliminar duplicatas heading/bio2. Nomes próprios, stacks e URLs são invariantes; nenhum texto editorial cru dos dados no render.

## Slices sequenciais
Caminhos abaixo relativos a `src/`, salvo indicação. Cada agente lê este plano e os arquivos listados antes de executar.

1. **Dados/i18n.** Arquivos: `data/{projects,business,featured,experience,metrics}.js`, `i18n/{en-US,pt-BR}.js`. Prompt: “Implemente o mapa final, traduções e paridade de chaves; mantenha referências válidas.”
2. **Fundação/shell.** Arquivos: `../tailwind.config.js`, `assets/css/app.css`, `App.vue`, `components/shared/{AppHeader,AppHeaderLinks,AppFooter,FooterCopyright}.vue`. Prompt: “Aplique tokens e composição editorial; retire centralização global/transição ornamental; mantenha controles acessíveis.”
3. **Home.** Arquivos: `views/HomePage.vue`, `components/shared/AppBanner.vue`, `components/home/{FeaturedBento,HomeMetrics,ExperienceTimeline,ContactCTA}.vue`, `components/reusable/{ProofCard,ResumeLinks}.vue`, `components/about/{AboutClients,AboutClientSingle}.vue`; criar `components/home/AIOSSStrip.vue`. Prompt: “Reorganize conforme arquitetura, resolvendo conteúdo por ID traduzido e datas reais.”
4. **Catálogos.** Arquivos: `components/projects/{ProjectsGrid,ProjectsFilter,ProjectSingle}.vue`, `components/business/BusinessProjectsGrid.vue`. Prompt: “Adapte cards, deploy secundário, campos opcionais/status e títulos/papéis traduzidos; preserve busca+filtro.”
5. **Contato/sweep.** Arquivos: `data/contacts.js`, `components/contact/ContactDetails.vue`, `components/shared/AppFooter.vue`, `i18n/{en-US,pt-BR}.js`, `router/index.js`; criar `composables/useWhatsApp.js`. Prompt: “Centralize 5571992432603 e gere reativamente wa.me/5571992432603?text=encodeURIComponent(t('contact.whatsappMessage')); PT: ‘Olá, Yan! Vi seu portfólio e gostaria de conversar.’; EN: ‘Hi, Yan! I saw your portfolio and would like to talk.’ Audite todos os renders; metadados devem reagir imediatamente ao idioma.”
6. **Aceite.** Arquivos: fontes acima e `docs/` gerado. Prompt: “Execute npm run build; revise diff e checklist; corrija regressões.”

## Verificação
Build aprovado; 13 projetos, 8 sistemas/5 infra; referências únicas; nenhuma chave ausente/duplicada. Comparar screenshots V1/V2 em 360/768/1440px × EN/PT × light/dark: mudança estrutural evidente, sem overflow. Conferir teclado/foco/menu, AA, reduced-motion, persistência, hash direto/fallback, busca+filtro/estado vazio, cinco logos, PDFs, repo/deploy, status e WhatsApp decodificado nos dois idiomas. Sweep inclui títulos, papéis, categorias, métricas, ARIA, alt, localização, datas e metadados; nenhum fallback EN mascara PT incompleto.
