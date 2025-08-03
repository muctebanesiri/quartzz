import { Direction } from "@napi-rs/simple-git"
import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>این ره که تو میروی به پوچستان است!</h1>
      <img src="attachment/404.png"></img>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
