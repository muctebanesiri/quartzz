import { Component } from "./quartz/components/types"

export const LegalQuickLinks: Component = () => {
  const laws = [
    { title: "قانون مدنی", path: "/قوانین/مدنی" },
    { title: "قانون مجازات اسلامی", path: "/قوانین/جزا" },
    { title: "قانون تجارت", path: "/قوانین/تجارت" },
    { title: "قانون اساسی", path: "/قوانین/اساسی" },
  ]

  return (
    <div class="legal-quicklinks">
      <h3>دسترسی سریع</h3>
      <ul>
        {laws.map((law) => (
          <li>
            <a href={law.path}>
              <i class="fas fa-book-law"></i> {law.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
