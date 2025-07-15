import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "مرکز قوانین ایران",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fa-IR",
    baseUrl: "mucteba.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "Vazirmatn",
      },
      colors: {
        lightMode: {
          light: "#F8F8F8",
          lightgray: "#eaeaea",
          gray: "#9e9e9e",
          darkgray: "#2d3748",
          dark: "#1e293b",
          secondary: "#1a237e",  // Deep blue for legal feel
          tertiary: "#2c3e50",   // Dark blue-gray
          highlight: "rgba(67, 56, 202, 0.15)", // Light blue highlight
          textHighlight: "rgba(67, 56, 202, 0.15)",
        },
        darkMode: {
          light: "#1e293b",
          lightgray: "#334155",
          gray: "#9f9898",
          darkgray: "#e2e8f0",
          dark: "#f8fafc",
          secondary: "#a3bffa",  // Light blue for better visibility
          tertiary: "#7f9cf5",   // Medium blue
          highlight: "rgba(163, 191, 250, 0.15)",
          textHighlight: "rgba(163, 191, 250, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        showByDefault: true, // Always show TOC for legal documents
        maxDepth: 4         // Deeper hierarchy for legal codes
      }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.CustomLegalPlugin(), // Would be a custom plugin for legal references
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage({
        ...Plugin.ContentPage.defaultOpts,
        css: ["legal-styles.css"], // Custom legal styles
      }),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false, // Disable RSS for legal content
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      Plugin.LegalSearchEmitter(), // Custom search emitter
    ],
  },
}

export default config
