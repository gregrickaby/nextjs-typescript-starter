import type {NextPage} from 'next'
import Layout from '~/components/Layout'

/**
 * Homepage component.
 *
 * @return {Element} The Homepage component.
 */
const Home: NextPage = () => {
  return (
    <Layout>
      <p>Hello from the homepage!</p>
    </Layout>
  )
}

export default Home
