import { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

// The custom Document is used to augment the application's <html> and <body> tags, like setting the lang property of the <html> tag, adding third-party scripts, linking custom fonts, add analytics scripts, etc...
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}