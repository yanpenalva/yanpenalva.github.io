import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const siteUrl = "https://penalva.me";
const metadata = JSON.parse(await readFile(resolve(root, "src/i18n/routeMetadata.json"), "utf8"));
const locales = Object.keys(metadata.locales);
const sourceHtml = await readFile(resolve(root, "docs/index.html"), "utf8");

const escaped = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const pathFor = (path, locale) => {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return locale === "pt-BR" ? `/pt-br${normalized}` : normalized;
};

const urlFor = (path, locale) => new URL(pathFor(path, locale), siteUrl).href;

const replaceRequired = (html, pattern, replacement, label) => {
  assert.match(html, pattern, `index.html is missing ${label}`);
  return html.replace(pattern, replacement);
};

const renderPage = (route, locale) => {
  const page = metadata.locales[locale][route.key];
  assert.ok(page?.title && page?.description, `Missing ${locale} SEO metadata for ${route.key}`);

  const canonical = urlFor(route.path, locale);
  const alternates = locales.map((language) =>
    `<link rel="alternate" hreflang="${language}" href="${urlFor(route.path, language)}" />`
  );
  alternates.push(`<link rel="alternate" hreflang="x-default" href="${urlFor(route.path, "en-US")}" />`);

  let html = replaceRequired(sourceHtml, /<html lang="[^"]*">/, `<html lang="${locale}">`, "html language");
  html = replaceRequired(html, /<title>[\s\S]*?<\/title>/, `<title>${escaped(page.title)}</title>`, "title");
  html = replaceRequired(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escaped(page.description)}" />`, "description");

  for (const [pattern, replacement, label] of [
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escaped(page.title)}" />`, "Open Graph title"],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escaped(page.description)}" />`, "Open Graph description"],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`, "Open Graph URL"],
    [/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${locale.replace("-", "_")}" />`, "Open Graph locale"],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escaped(page.title)}" />`, "Twitter title"],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escaped(page.description)}" />`, "Twitter description"],
  ]) {
    html = replaceRequired(html, pattern, replacement, label);
  }

  html = html.replace(/\s*<link rel="alternate" hreflang="[^"]+" href="[^"]*" \/>/g, "");
  html = replaceRequired(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />\n    ${alternates.join("\n    ")}`,
    "canonical link"
  );

  assert.ok(html.includes(`<link rel="alternate" hreflang="pt-BR" href="${urlFor(route.path, "pt-BR")}" />`));
  return html;
};

for (const route of metadata.pages) {
  for (const locale of locales) {
    const routePath = pathFor(route.path, locale).replace(/^\/+|\/+$/g, "");
    const outputPath = resolve(root, "docs", routePath, "index.html");
    const html = renderPage(route, locale);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
    assert.equal(await readFile(outputPath, "utf8"), html);
  }
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...metadata.pages.flatMap((route) => locales.map((locale) => {
    const alternates = locales.map((language) =>
      `<xhtml:link rel="alternate" hreflang="${language}" href="${urlFor(route.path, language)}" />`
    );
    alternates.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(route.path, "en-US")}" />`);
    return `  <url><loc>${urlFor(route.path, locale)}</loc>${alternates.join("")}</url>`;
  })),
  "</urlset>",
  "",
].join("\n");

await writeFile(resolve(root, "public/sitemap.xml"), sitemap);
await writeFile(resolve(root, "docs/sitemap.xml"), sitemap);
console.log(`Generated ${metadata.pages.length * locales.length} localized SEO pages and sitemap.`);
