import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  background-color: #263343;
  color: white;
  margin-top: 12px;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        Copyright 2022. JeongIn All rights reserved.
      </FooterWrapper>
    </>
  );
};

export default Footer;
