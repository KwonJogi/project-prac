import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #263343;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    & li {
      width: 100%;
      text-align: center;
    }
  }

  & li {
    padding: 8px 12px;
  }

  & li:hover {
    background-color: #d49466;
    border-radius: 4px;
  }
`;
const Navigation = () => {
  return (
    <NavWrapper>
      <UlWrapper>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
        <li>메뉴5</li>
      </UlWrapper>
    </NavWrapper>
  );
};

export default Navigation;
