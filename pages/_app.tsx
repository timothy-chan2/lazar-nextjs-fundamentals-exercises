import type { AppProps } from 'next/app'

import '../styles.css'

// The following lines of code is used to override the default App component
const App = ({ Component, pageProps }: AppProps) => {
  return <Component title {...pageProps} />
}

export default App