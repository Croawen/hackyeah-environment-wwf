import React, { useMemo } from 'react'
import LaddaButton, { SLIDE_UP } from 'react-ladda'
import { Button } from 'reactstrap'
import styled from 'styled-components'
export const BasicButton = props => {
  return <Button color="link" props={props} />
}

export const LinkButton = styled.button`
  max-width: 235px;
  color: #ffffff;
  height: 21px;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  background: none;
  border: none;
  &:hover {
    color: #657fde;
  }
`

export const FormSubmitButton = styled(
  ({ textColor, color = 'primary', outline, className, ...props }) => {
    const classNames = useMemo(() => {
      const classes = ['btn', 'btn-lg', 'btn-ladda']

      if (color || outline) {
        classes.push(`btn${outline ? '-outline' : ''}-${color || ''}`)
      }

      if (textColor) {
        classes.push(`text-${textColor}`)
      }

      if (className) {
        classes.push(className)
      }

      return classes.join(' ')
    }, [textColor, color, outline, className])

    return (
      <LaddaButton
        size="lg"
        className={classNames}
        data-color="blue"
        data-style={SLIDE_UP}
        type="submit"
        {...props}
      />
    )
  }
)`
  font-size: 15px;
  font-weight: 600;

  max-width: 235px;
  width: 100%;
  min-height: 45px;
`
