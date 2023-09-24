import type { AppProps } from 'next/app'

import Layout from '../src/components/layout'

import { ChakraProvider } from '@chakra-ui/react'

import '../styles.css'

// The following lines of code is used to override the default App component
// Added a custom layout that includes a footer on all pages
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component title {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App