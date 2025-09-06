import '../styles/globals.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../lib/queryClient'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
