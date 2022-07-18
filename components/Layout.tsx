import Footer from '~/components/Footer'
import Header from '~/components/Header'
import {LayoutProps} from '~/lib/types'

/**
 * Layout component.
 *
 * @param  {object}  props          The component attributes as props.
 * @param  {Node}    props.children Child component(s) to render.
 * @return {Element}                The layout component.
 */
export default function Layout({children}: LayoutProps) {
  return (
    <div className="m-auto max-w-3xl space-y-8">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
