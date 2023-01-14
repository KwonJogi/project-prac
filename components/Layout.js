import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const DivWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  flex: 1;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DivLeft = styled.div`
  width: 20%;
`;
const DivCenter = styled.div`
  width: 60%;
`;
const DivRight = styled.div`
  width: 20%;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <DivWrapper>
        <DivLeft>왼쪽</DivLeft>
        <DivCenter>{children}</DivCenter>
        <DivRight>오른쪽</DivRight>
      </DivWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
