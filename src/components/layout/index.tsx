import type { ReactNode } from 'react'

import Footer from '../footer/footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout