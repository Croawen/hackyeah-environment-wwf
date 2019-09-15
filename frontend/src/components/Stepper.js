import React from "react";
import styled from "styled-components";

const StepConnector = styled.div`
  border-bottom: 1px solid #0d0d0d;
`;

const StepLabel = styled.span`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #0d0d0d;
  text-align: center;

  &[data-active="true"] {
    opacity: 0.4;
    font-weight: normal;
  }
`;

const StepButton = styled.div`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 50%;

  background-color: #0d0d0d;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &[data-active="true"] {
    border: 1px solid #0d0d0d;
    color: #0d0d0d;
    background-color: transparent;
    opacity: 0.4;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 17px 200px;
  > * {
    flex-grow: 1;
  }
`;

const Stepper = ({ buttons, current }) => {
  let result = [];

  buttons
    .map((value, i) => (
      <Step>
        <StepButton data-active={(i >= current).toString()}>{i + 1}</StepButton>
        <StepLabel data-active={(i >= current).toString()}>{value}</StepLabel>
      </Step>
    ))
    .forEach((step, i, arr) => {
      result.push(step);
      if (i !== arr.length - 1) {
        result.push(<StepConnector />);
      }
    });

  return <Container>{result}</Container>;
};

export default Stepper;
