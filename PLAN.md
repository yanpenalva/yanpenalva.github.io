# Plano — Repaginação penalva.me

## Objetivo e invariantes
“Bento proof-first sobre tokens precision-dark”: comunicar competência e entregas em 30 segundos, para recrutadores e clientes. Cada seção precisa oferecer resultado, case ou link verificável. Preservar integralmente `src/data/projects.js` (12 itens), 7 sistemas UEFS, 5 iniciativas de infraestrutura, bios, contadores 6/20+, cinco logos, contatos/sociais, PDFs PT/EN e comportamento combinado busca/filtro. Não inventar métricas, datas ou vínculos profissionais.

## Arquitetura de informação
- `/`: hero compacto (nome, especialidade, contato e ambos CVs); bento com Starterkit Laravue, PHPenalva e SISPPPG; indicadores existentes; experiência/timeline; clientes; CTA contato. Cards mostram problema, contribuição e evidência disponível, sem promessas numéricas novas.
- `/projects`: catálogo completo, busca por título, categorias e estado vazio; destaques apenas referenciam IDs existentes.
- `/business-projects`: sistemas e infraestrutura separados; papel, stack, contribuição e referência sempre visíveis. URLs públicas clicáveis; SGP identificado como interno.
- `/about`: bios completas, foto, experiência e indicadores; clientes reutilizados.
- `/contact`: destino do CTA e link explícito no menu, com email, localização e redes existentes; sem formulário dependente de backend.
- Menu: Home, Projects, Business, About, Contact; nomes traduzidos. Fallback ganha `NotFound.vue` com retorno à home.

Manter `createWebHashHistory`: links atuais e atualização direta continuam funcionando no GitHub Pages sem redirecionamentos/`404.html`. Metadados traduzidos serão atualizados no navegador; hash SPA não fornece previews sociais distintos por rota.

## Tokens e linguagem visual
Em `tailwind.config.js`, manter `darkMode: 'class'` e substituir cores legadas por tokens semânticos ligados a variáveis CSS em `app.css` (`:root`/`.dark`):

| Token | Dark | Light |
| --- | --- | --- |
| canvas | #09090B | #FAFAFA |
| surface | #18181B | #FFFFFF |
| border | #3F3F46 | #D4D4D8 |
| text | #FAFAFA | #18181B |
| muted | #A1A1AA | #52525B |
| accent | #5E6AD2 | #5E6AD2 |

Inter variável local WOFF2 para texto, JetBrains Mono local para labels; `font-display: swap`, fallbacks de sistema. Unificar `App.vue`/CSS, eliminando Avenir/GeneralSans na conclusão. Base 16px, títulos 32–56px, largura máxima 1120px, espaçamento 4/8/16/24/32/48/64px, bordas 1px, raios 12px. Bento assimétrico desktop, coluna única mobile; light editorial com alinhamento à esquerda. Sem gradientes decorativos, sombras pesadas, WebGL ou Three.js. Hover/foco por borda/cor em 120–180ms; `prefers-reduced-motion` elimina movimentos e contagem animada. Validar contraste AA, inclusive botões e foco.

## i18n
Criar `src/i18n/en-US.js` e `pt-BR.js`: namespaces `nav`, `home`, `about`, `projects`, `business`, `contact`, `common`, `routes`. Conteúdo EN atual integral; traduções por ID (`projects.<id>`, `business.systems.<id>`, `business.infra.<id>`), sem modificar URLs, nomes próprios ou stacks.

`useLocale.js`: estado compartilhado reativo, `t(key, params)` com interpolação simples, fallback PT → EN → chave; locale inválido → EN-US. Persistir chave `locale` com leitura/escrita protegidas; primeira visita EN-US, sem autodetecção. Composable próprio basta: dois idiomas, sem pluralização complexa; nenhuma dependência nova. `LanguageSwitcher.vue` no header desktop/mobile, operável por teclado. Atualizar `html.lang`, título e descrição via observação de rota+locale e chaves em `route.meta`. Categorias mantêm valores EN canônicos e traduzem somente labels; busca considera títulos original/traduzido sem perder seleção ao alternar idioma.

## Slices sequenciais e aceite
1. **`revamp/01-foundations`** — Alterar Tailwind, `app.css`, `App.vue`, `useTheme`, `ThemeSwitcher`; criar `reusable/ProofCard.vue`. Migrar consumidores dos tokens. Aceite: temas persistem, fontes uniformes, foco visível, movimento reduzido respeitado.
2. **`revamp/02-locale-shell`** — Criar dicionários, composable e switcher; alterar header/links, footer/copyright, router e `index.html`; criar NotFound. Aceite: contato acessível, EN default, PT persistido, nenhuma string/ARIA sem tradução, metadados mudam imediatamente.
3. **`revamp/03-proof-data`** — Extrair Business, bios, indicadores, clientes e contatos para `src/data/`; criar `featured.js` e `experience.js`. Timeline usa datas comprovadas nos CVs; sem datas confirmadas, sequência temática explícita. Aceite: inventário integral e referências resolvidas, nenhum dado fabricado.
4. **`revamp/04-home`** — Alterar HomePage/AppBanner; criar `home/FeaturedBento`, `ExperienceTimeline`, `ContactCTA`, `reusable/ResumeLinks`; adaptar AboutCounter/AboutClients/AboutClientSingle. Remover imagem decorativa do hero e animação dos contadores. Foto de perfil (AboutMe, src/assets/images/profile.jpeg) substituída pela foto atual enviada pelo usuário (fundo azul/roxo). Aceite: provas escaneáveis em 30s, ambos PDFs disponíveis, cinco logos legíveis.
5. **`revamp/05-catalog-content`** — Alterar ProjectsGrid/ProjectsFilter/ProjectSingle, BusinessProjectsGrid, AboutMe, views About/Contact e ContactDetails. Remover overlay Business; CV direto substitui desvio à home. Aceite: 12 projetos, 7+5 Business, busca+filtro combinados, bios completas, links preservados.
6. **`revamp/06-validation`** — Remover estilos/classes/fontes legados sem consumidores e transições ornamentais; revisar todas as rotas. Aceite: checklist abaixo aprovado.

## Verificação por slice
Executar `npm run build` (Vite; saída em `docs/`) e revisar diff gerado antes de publicar. Checklist visual: 360/768/1440px; ambos idiomas × temas; sem overflow; hierarquia/contraste; teclado/menu/foco; reduced-motion; persistência após reload; rotas hash diretas/fallback; busca, categorias/estado vazio; imagens, cinco logos, links externos, email/WhatsApp e downloads PT/EN. Este documento planeja essas verificações; nenhuma implementação/build foi executada nesta etapa.
