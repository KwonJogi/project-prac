import React from "react";
import Layout from "../components/Layout";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";

const GlobalStyles = createGlobalStyle`
 ${reset}
`;

const _app = ({ Component }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default _app;
