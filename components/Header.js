import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  padding-top: 32px;
  padding-bottom: 24px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #263343;
  color: white;
`;

const LogoWrapper = styled.div`
  font-size: 40px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>로고</LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
