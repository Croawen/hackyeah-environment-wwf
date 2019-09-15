import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0d0d0d;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  border-radius: 12px;
  border: solid 1px #707070;
  background-color: #ffffff;
  padding: 20px;
  opacity: 1;
  ::placeholder {
    opacity: 0.6;
  }
  font-size: 16px;
  line-height: 1.71;
  color: #0d0d0d;

  width: 100%;
  min-height: 220px;
  resize: none;
  margin-bottom: 32px;
`;

const CollapseTitle = styled.h3`
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  color: #0d0d0d;
`;

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 16px;
`;

const Item = styled.li`
  font-size: 14px;
  color: #0d0d0d;
  line-height: 2.29;
  white-space: pre-wrap;
`;

const CollapseBody = styled.div`
  overflow: hidden;
  height: 0;
  transition: all 0.35s;
  &[data-opened="true"] {
    height: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: solid 1px #707070;
  padding: 9px 9px;
  font-size: 14px;
  box-sizing: border-box;
  font-weight: 500;
  outline: none;
`;

const InputLabelText = styled.span`
  font-size: 14px;
  color: #0d0d0d;
  margin-bottom: 8px;
  font-weight: normal;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding-left: 20px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Collapse = styled.div``;

const Form = styled.form``;

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
          <Title>
            Świetnie, to już ostatni krok! Powiedz nam więcej o sobie
          </Title>
          <InputLabel>
            <InputLabelText>Imię i nazwisko</InputLabelText>
            <Input name="name" value={values.name} onChange={handleChange} />
          </InputLabel>
          <InputLabel>
            <InputLabelText>Adres email</InputLabelText>
            <Input name="email" value={values.email} onChange={handleChange} />
          </InputLabel>
          <Title>Jak przyczyniasz się do ochrony?</Title>
          <List>
            <Item>
              Interwencja z Twojej strony pomoże zapobiec zranieniu zwierząt, a
              nawet może również uratować życie zwierzętom żyjącym w lasach, a
              także łąkach i polach w pobliżu kompleksów leśnych. W
              szczególności przeprowadzane są polowania bez legitymowania się
              odpowiednimi uprawnieniami i dokumentami, nadużywanie pozwolenia
              na polowania poprzez kilkakrotne polowanie w oparciu o to samo
              pozwolenie, czy przy użyciu niezarejestrowanej lub niedozwolonej
              broni. Poluje się nielegalnie przy paśnikach zakłócając spożywanie
              pokarmu przez zwierzęta i odstraszając je. Najokrutniejszą formą
              kłusownictwa jest zakładanie sideł, wnyków i innych pułapek na
              zwierzęta, które przyczyniają się do ich cierpień.
            </Item>
          </List>
        </Form>
      </>
    );
  }
);
