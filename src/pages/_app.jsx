/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "@components/Layout";

import "swiper/css/bundle";
// swiper core styles
import "swiper/css";

// modules styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "@styles/style.default.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
