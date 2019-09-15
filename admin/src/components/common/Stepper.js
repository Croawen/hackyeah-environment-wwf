import React from 'react'
import styled from 'styled-components'

export const StepLabelText = styled.div`
  width: 100%;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: center;
  ${props => (props.active ? `color: var(--activeText);` : `color: var(--inactiveText);`)}
`

export const StepLabelButton = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  z-index: 2;
  border-radius: 50%;

  ${props =>
    props.active
      ? `
background-color: var(--active);
width: 18px;
height: 18px;
font-size: 11px; `
      : `
background-color: var(--inactive); 
width: 14px;
height: 14px;
margin-bottom: 2px;
font-size: 8px;`}
`
const StepLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const StepConnector = styled.div`
  bottom: 9px;
  left: -50%;
  right: 50%;
  position: absolute;

  ${props =>
    props.active
      ? `border-top: 1px solid var(--active);`
      : `border-top: 1px solid var(--inactive);`}
  z-index: 1;
`

export const Step = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  &:first-child {
    ${StepConnector} {
      display: none;
    }
  }
`
export const Container = styled.div`
  --active: #101d4b;
  --inactive: #b7bbc9;
  --activeText: var(--active);
  --inactiveText: var(--inactive);

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
`

const Stepper = ({ buttons, noButton, noConnector, noNumber, current, ...props }) => {
  let Elements = []
  for (let i = 1; i <= buttons.length; i++) {
    const text = buttons[i - 1]
    Elements.push(
      <Step key={i}>
        {noConnector || <StepConnector active={i <= current} />}
        <StepLabel>
          <StepLabelText active={i <= current}>{text}</StepLabelText>
          {noButton || <StepLabelButton active={i <= current}>{noNumber || i}</StepLabelButton>}
        </StepLabel>
      </Step>
    )

    if (i < buttons.length) {
      Elements.push(<Step key={-i}>{noConnector || <StepConnector active={i < current} />}</Step>)
    }
  }

  return <Container {...props}>{Elements}</Container>
}

export default Stepper
