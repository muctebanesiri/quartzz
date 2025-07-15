import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Keep comments disabled
  ],
  footer: Component.Footer({
    links: {
      // Keep your links commented for now
    },
  }),
}

// components for pages that display a single page (e.g. a legal document)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({
      showReadingTime: false, // Hide reading time for legal docs
    }),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.Explorer({
      title: "فهرست قوانین", // "List of Laws"
      filterFn: (node) => {
        // Only show legal documents
        return node.file?.frontmatter?.category === "legal"
      },
    })),
    Component.DesktopOnly(Component.Graph()),
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.MobileOnly(Component.Search()),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.RecentNotes({
      title: "قوانین اخیراً به‌روز شده", // "Recently Updated Laws"
      limit: 5,
      filter: (f) => f.frontmatter?.category === "legal",
      linkToMore: "/tags/legal/" as any,
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer({
      title: "دسته‌بندی قوانین", // "Law Categories"
      filterFn: (node) => node.file?.frontmatter?.category === "legal"
    })),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}
