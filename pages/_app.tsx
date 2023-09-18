import type { AppProps } from 'next/app'

// The following lines of code is used to override the default App component
const App = ({ Component, pageProps }: AppProps) => {
  return <Component title {...pageProps} />
}

export default App