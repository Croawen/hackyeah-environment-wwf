import React from 'react'
import { Input, Label } from 'reactstrap'
import styled from 'styled-components'

export const InputLabel = styled(Label)`
  font-size: 13px;
  font-weight: 600;
  /* color: #3c4044; */

  color: var(--steelBlue-80);
`

export const StyledInput = styled(Input)`
  border-color: #c8ced3;
  border-radius: 3px;
  border: solid 1px #c8ced3;

  font-size: 14px;
  font-weight: normal;
  color: var(--black);

  ::placeholder {
    font-weight: normal;
    color: var(--steelBlue);
  }

  &[readonly] {
    font-weight: 600;
    background-color: #fff;
  }
`

export const CharCounter = styled.span`
  text-align: right;
  float: right;
  bottom: 12px;
  position: absolute;
  right: 27px;
`

export const TextArea = styled(
  ({ count, maxLength, noResize, valid, invalid, className, ...props }) => (
    <div style={{ position: 'relative', flexGrow: 1 }}>
      <textarea
        maxLength={maxLength}
        className={`form-control ${valid ? 'is-valid ' : ''}${
          invalid ? 'is-invalid ' : ''
        }${className} `}
        {...props}
      />
      <CharCounter>
        {count}
        {maxLength && '/'}
        {maxLength}
      </CharCounter>
    </div>
  )
)`
  width: 100%;
  padding: 12px;
  border-radius: 3px;
  border: solid 1px #c8ced3;
  font-size: 14px;
  color: var(--black);

  ::placeholder {
    color: var(--steelBlue);
  }

  ${props =>
    props.noResize &&
    `
  height: 100% !important; 
  resize:none;`}
`
