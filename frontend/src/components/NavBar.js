import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import wwfLogo from "../assets/wwf-logo.png";
import { NAV_ITEMS } from "../constants";

const NavButton = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  padding: 9px 17px;
  object-fit: contain;
  border-radius: 2px;
  border: solid 1px #ffffff;
  background: transparent;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const NavItem = styled.div`
  padding-left: 80px;
  text-transform: uppercase;
`;

const NavItems = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const BrandImg = styled.img`
  height: 100%;
`;

const BrandLink = styled(Link)`
  width: inherit;
`;

const Brand = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  height: 100px;
  padding-left: 152px;
  padding-right: 72px;
`;

const NavBar = () => (
  <Container>
    <Brand>
      <BrandLink to="#">
        <BrandImg src={wwfLogo} />
      </BrandLink>
    </Brand>
    <NavItems>
      {NAV_ITEMS.map(({ label, to }) => (
        <NavItem>
          <NavItemLink to={to}>{label}</NavItemLink>
        </NavItem>
      ))}
    </NavItems>
    <NavRight>
      <NavButton>Chcę pomóc</NavButton>
    </NavRight>
  </Container>
);

export default NavBar;
