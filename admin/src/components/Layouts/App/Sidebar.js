import {
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarNav,
} from '@coreui/react'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import ActivateSubscriptionsButton from './sidebar/ActivateSubscriptionsButton'
import navConfig from './sidebar/navConfig'

const StyledSidebar = styled(AppSidebar)`
  border-right: solid 1px #d9e0e5;
  background-color: rgba(255, 255, 255, 0.9);
`

const StyledSidebarNav = styled(AppSidebarNav)`
  .nav-item {
    .nav-link {
      i {
        color: var(--steelBlue);
      }
      font-size: 13px;
      font-weight: 500;
      color: var(--steelBlue);

      &:hover,
      &.active:hover {
        background: #718ef9;
        &,
        i {
          color: white;
        }
      }

      &.active,
      &.active i {
        color: #718ef9;
        background: transparent;
      }
    }
  }
`

const StyledSidebarFooter = styled(AppSidebarFooter)`
  background: none !important;
  /* TODO padding top? */
  padding-top: 47px !important;
  padding-bottom: 47px !important;
`

const Sidebar = () => {
  return (
    <StyledSidebar fixed display="lg">
      <AppSidebarHeader />
      <AppSidebarForm />
      <StyledSidebarNav navConfig={navConfig} />
      <StyledSidebarFooter>
        <Switch>
          <Route path={['/', '/dashboard']} exact={true}>
            <ActivateSubscriptionsButton />
          </Route>
        </Switch>
      </StyledSidebarFooter>
      {/* <AppSidebarMinimizer /> */}
    </StyledSidebar>
  )
}

export default Sidebar
