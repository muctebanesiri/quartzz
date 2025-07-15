import { Component } from "./quartz/components/types"

export const LegalDocumentMeta: Component = () => {
  return (
    <div class="legal-meta">
      <ul>
        <li>تاریخ تصویب: <time>1402/05/15</time></li>
        <li>آخرین اصلاح: <time>1403/02/10</time></li>
        <li>منبع رسمی: مجلس شورای اسلامی</li>
      </ul>
    </div>
  )
}