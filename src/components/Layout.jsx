/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import Head from "next/head";
import SSRProvider from "react-bootstrap/SSRProvider";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { FormProvider } from "@components/FormContext";
import { BookingProvider } from "@components/BookingContext";
import SvgIcons from "@components/SvgIcons";
import NextNProgress from "@components/NextNProgress";

function Layout(pageProps) {
  const { user, error, isLoading } = useUser();

  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark,
    },
    loggedUser: user ? true : false,
    headerClasses: pageProps.headerClasses,
  };
  return (
    <SSRProvider>
      <div
        style={{ paddingTop: pageProps.noPaddingTop ? "0" : "72px" }}
        className={pageProps.className}
      >
        <Head>
          <title>{pageProps.title} - Mr Salons</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <NextNProgress color="#4E66F8" options={{ showSpinner: false }} />
        {!pageProps.hideHeader && <Header {...headerProps} />}
        {pageProps.listingForm || pageProps.bookingForm ? (
          <>
            {pageProps.listingForm && (
              <FormProvider>
                <main>{pageProps.children}</main>
              </FormProvider>
            )}
            {pageProps.bookingForm && (
              <BookingProvider>
                <main>{pageProps.children}</main>
              </BookingProvider>
            )}
          </>
        ) : (
          <main>{pageProps.children}</main>
        )}

        {!pageProps.hideFooter && <Footer />}
        <SvgIcons />
      </div>
    </SSRProvider>
  );
}

export default Layout;
