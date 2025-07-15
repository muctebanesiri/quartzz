import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Keep comments disabled for now
  ],
  footer: Component.Footer({
    links: {
      // Keep your links commented for now
    },
  }),
}

// Components for single legal document pages
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.LegalDocumentMeta(), // Custom metadata for legal docs
    Component.TagList(),
    Component.LegalReferenceLinks(), // Custom component for related laws
  ],
  left: [
    Component.DesktopOnly(Component.LegalTableOfContents()), // Enhanced TOC
    Component.DesktopOnly(Component.LegalExplorer({
      filterFn: (node) => {
        return node.file?.frontmatter?.category === "legal"
      },
    })),
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.MobileOnly(Component.Search()),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.LegalQuickLinks(), // Custom quick access to major laws
    Component.LegalUpdatesFeed(), // Recent legal changes
  ],
}

// Components for list pages (tags, categories, search results)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.LegalContentMeta()
  ],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.LegalCategoryFilter(), // Filter by legal categories
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.LegalExplorer({
      filterFn: (node) => node.file?.frontmatter?.category === "legal"
    })),
    Component.LegalReferenceIndex(), // Index of legal terms
  ],
}
