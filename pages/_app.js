import React from "react";
import Layout from "../components/Layout";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import wrapper from "../store/configureStore";
import Head from "next/head";

const GlobalStyles = createGlobalStyle`
 ${reset}
`;

const _app = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>portfolio-1</title>
        </Head>
        <GlobalStyles />
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default _app;
