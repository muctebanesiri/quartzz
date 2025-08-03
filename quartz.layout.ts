import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
afterBody: [
],

  //  Component.Comments({
  //    provider: 'giscus',
  //    options: {
        // from data-repo
   //     repo: 'muctebanesiri/quartz',
        // from data-repo-id
  //      repoId: 'R_kgDOO6vOAQ',
        // from data-category
    //    category: 'Announcements',
        // from data-category-id
   //     categoryId: 'DIC_kwDOO6vOAc4Crhth',
   //   }
//    }),

  footer: Component.Footer({
    links: {
       "یوتیوب": "https://www.youtube.com/@muctebanesiri",
       "گیت‌هاب": "https://github.com/muctebanesiri",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),

  ],
  left: [
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Sidenotes()),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.Backlinks()),

    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.MobileOnly(Component.Search()),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.RecentNotes({
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("notes/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
        linkToMore: "notes/" as SimpleSlug,

      }),
      // Component.DesktopOnly(Component.Explorer({
    //   filterFn: (node) => {
    //     // exclude files with the tag "explorerexclude"
    //     return node.file?.frontmatter?.tags?.includes("explorerexclude") !== true
    //   },
    // })),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Search()),
    ///Component.DesktopOnly(Component.Explorer({
      ///filterFn: (node) => {
        // exclude files with the tag "explorerexclude"
        ///return node.file?.frontmatter?.tags?.includes("explorerexclude") !== true
      ///},
   //})),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Darkmode()),
  ],
}
