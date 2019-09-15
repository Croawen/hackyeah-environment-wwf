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
          <Title>Materiały dowodowe</Title>
          <List>
            <Item>data</Item>
          </List>
          <Title>Źródła</Title>
          <List>
            <Item>
              Ustawa z dnia 14 grudnia 2012 r. o odpadach (tj. Dz.U. z 2018 r.
              poz. 992)
              <br />
              http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20130000021
            </Item>
            <Item>
              Ustawa z dnia 20 maja 1971 r. Kodeks wykroczeń (tj. Dz.U. z 2018
              r. poz. 618)
              <br />
              http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19710120114
            </Item>
            <Item>
              Ustawa z dnia 13 września 1996 r. o utrzymaniu czystości i
              porządku w gminach (tj. Dz.U. z 2018 r. poz. 1454)
              <br />
              http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19961320622
            </Item>
          </List>
        </Form>
      </>
    );
  }
);
