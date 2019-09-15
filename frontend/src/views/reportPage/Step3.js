import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 18px;
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
