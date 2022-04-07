import React from 'react'
import type { AppProps } from 'next/app'

import Layout from '@components/Layout'

import 'swiper/css/bundle'
// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@fortawesome/fontawesome-svg-core/styles.css'

import '@styles/style.default.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
