import React, { useEffect, useState } from 'react'
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 40px;
`

const StyledNav = styled(Nav)`
  flex: 0 0 auto;
  border: solid 1px #4dc9a3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: rgba(129, 231, 200, 0.2);
  overflow: hidden;
  & ~ .tab-content {
    margin-top: 0 !important;
    border-top: 0 !important;
  }
`

const StyledNavItem = styled(NavItem)`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;

  margin-bottom: 0px !important;
  border-radius: 0;
  border-color: transparent;

  &:not(:first-child) {
    border: 0;
    border-left: 1px solid #4dc9a3;
  }

  .nav-link {
    border: 0px solid transparent;
    border-radius: 0;
    font-size: 14px;
    font-weight: 600;
    color: #4dc9a3 !important;
  }

  .nav-link:hover {
    background-color: rgba(129, 231, 200, 0.5);
  }

  .nav-link.active {
    background-color: #81e7c8;
    color: #ffffff !important;
  }
`

const TabsLayout = ({ initial = 0, tabs, onChange, ...props }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initial)
  const TabComponent = tabs[activeTabIndex].Component
  const limitHeight = tabs[activeTabIndex].limitHeight

  useEffect(() => {
    if (initial !== activeTabIndex) {
      setActiveTabIndex(initial)
    }
    // eslint-disable-next-line
  }, [initial])

  return (
    <Container className="animated fadeIn">
      <Row className="h-100">
        <Col className={`d-flex flex-column ${limitHeight && 'h-100'}`}>
          <StyledNav tabs>
            {tabs.map(({ label }, i) => (
              <StyledNavItem key={i}>
                <NavLink
                  active={activeTabIndex === i}
                  onClick={() => {
                    setActiveTabIndex(i)
                    if (typeof onChange === 'function') {
                      onChange(tabs[i])
                    }
                  }}>
                  {label}
                </NavLink>
              </StyledNavItem>
            ))}
          </StyledNav>
          <TabContent activeTab={activeTabIndex} className="flex-grow-1 h-100">
            <TabPane
              className="p-0 d-flex flex-column h-100"
              tabId={activeTabIndex}>
              <TabComponent {...props} />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

export default TabsLayout
