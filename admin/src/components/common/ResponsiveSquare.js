import styled from 'styled-components'
import React from 'react'

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Outer = styled.div`
  position: relative;
  ::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const ResponsiveSquare = ({ children, ...props }) => (
  <Outer {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default ResponsiveSquare
