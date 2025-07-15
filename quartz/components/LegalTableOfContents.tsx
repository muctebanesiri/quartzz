import { Component } from "./quartz/components/types"

export const LegalTableOfContents: Component = ({ fileData }) => {
  return (
    <div class="toc legal-toc">
      <h3>فهرست مواد قانونی</h3>
      <ul>
        {fileData.headings.map((heading) => (
          <li data-level={heading.level}>
            <a href={`#${heading.slug}`} data-for={heading.slug}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      <div class="legal-toc-footer">
        <a href="#top" class="back-to-top">
          <i class="fas fa-arrow-up"></i> بازگشت به ابتدا
        </a>
      </div>
    </div>
  )
}
