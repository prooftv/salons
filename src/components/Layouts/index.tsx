import { FC, ReactNode } from 'react'
// import Script from 'next/script'
// import Navbar from '@components/Navbar/Navbar'
// import Footer from '@components/Footer/Footer'
import { IHeadProps } from '@utils/interfaces'
import Head from '@components/Head'

interface Props extends IHeadProps {
  children?: ReactNode
  navbar?: boolean
  footer?: boolean
}

const Layout: FC<Props> = ({
  children,
  title,
  description,
  keywords,
}): JSX.Element => {
  return (
    <>
      <Head title={title} description={description} keywords={keywords} />
      {/* {navbar && <Navbar />} */}
      <>{children}</>
      {/* {footer && <Footer />} */}
      {/* <Script src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyDUcxMNnz5ofM1JUMQUb4mRFm25Lpxt5co&v=3&callback=initMap" /> */}
    </>
  )
}

export default Layout
