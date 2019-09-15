import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/lemur.png";

const Text = styled.span`
  font-size: 14px;
  text-align: center;
  color: #0d0d0d;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0d0d0d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 104px;
`;

export default withRouter(
  ({
    history,
    match: {
      params: { type }
    },
    google,
    values,
    handleChange,
    handleSubmit,
    setFieldValue
  }) => {
    return (
      <>
        <Form>
          <img src={logo} alt="lemur"></img>
          <Title>Twoje zgłoszenie zostało przyjęte</Title>
          <Text>
            Dziękujemy za Twoje zaangażowanie, wspólnymi siłami możemy uratować
            naszą planetę. Na Twoją skrzynkę mailową wyślemy kopię sporządzonego
            dokumentu.
          </Text>
        </Form>
      </>
    );
  }
);
