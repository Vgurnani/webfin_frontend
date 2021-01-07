import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import Layout from '../components/shared/Layout';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Layout className="main-layout" {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const data = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/global")
  ]);
  const homepage = data[0]
  const global = data[1]
  return { ...appProps, pageProps: { global: global, homepage: homepage } };
};

export default MyApp;