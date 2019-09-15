import { useQuery } from "@apollo/react-hooks";
import { AppHeader, AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import React from "react";
import { Nav } from "reactstrap";
import styled from "styled-components";
import { LOGGED_USER_EMAIL } from "../../../graphql/loggedUser";
import { removeTokens } from "../../../utils/auth";
import { nestedGetterByDot } from "../../../utils/nestedGetter";
import DefaultHeaderDropdown from "../../DefaultHeaderDropdown";

const StyledHeader = styled(AppHeader)`
  background-color: var(--navyBlue);
  border-bottom: none;
`;

const Header = () => {
  const { data } = useQuery(LOGGED_USER_EMAIL);
  const onLogout = () => {
    removeTokens();
    window.location.href = "/login";
  };
  return (
    <StyledHeader>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      {/* <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </NavItem>
        <NavItem className="px-3">
          <Link to="/users">Users</Link>
        </NavItem>
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            <i className="icon-location-pin"></i>
          </NavLink>
        </NavItem>
      </Nav> */}
      <Nav className="ml-auto" navbar>
        <DefaultHeaderDropdown type="notif" />
        <DefaultHeaderDropdown type="mssgs" />
        <DefaultHeaderDropdown
          type="accnt"
          handleLogout={onLogout}
          userEmail={nestedGetterByDot(data, "loggedUser.email") || ""}
        />
      </Nav>
      {/* <AppAsideToggler className="d-md-down-none" />
      <AppAsideToggler className="d-lg-none" mobile /> */}
    </StyledHeader>
  );
};

export default Header;
