import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import externalApi from "../../services/externalApi";

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
    const [opened, setOpened] = useState(false);
    const [laws, setLaws] = useState([]);

    useEffect(() => {
      externalApi
        .url("/locations/laws")
        .get({ type })
        .json(({ items }) => {
          setLaws(items);
        });
    }, [type]);

    return (
      <>
        <Form>
          <Title>Zawiadomienie o podejrzeniu popełnienia przestępstwa</Title>
          <TextArea
            value={values.report}
            name="report"
            placeholder={`Niniejszym zawiadamiam o podejrzeniu popełnienia przestępstwa stypizowanego w art. 53 Prawa łowieckiego w dniu 22 lipca 2017 roku przez nieznane mi osoby w 
obszarze Puszczy Zielonki opodal miejscowości Tuczno, gm. Pobiedziska, przejawiającego się w prowadzeniu polowania z wykorzystaniem chartów. 

Ponadto wnoszę o przeprowadzenie dowodów wskazanych w uzasadnieniu niniejszego zawiadomienia.
`}
          />
          <Title>Uzasadnienie</Title>
          <TextArea
            value={values.reason}
            name="reason"
            placeholder={`Istnieje uzasadnione podejrzenie, że w dniu 22 lipca 2017 roku  nieznane mi osoby w obszarze Puszczy Zielonki opodal miejscowości Tuczno, gm. Pobiedziska,  prowadziły polowanie z wykorzystaniem chartów.
Dowód:
1. dokumentacja zdjęciowa (załączona do niniejszego zawiadomienia);
2. zeznania świadka – zawiadamiającego Jana Nowaka (zam. Pl. Zamkowy 1, 00 - 267 Warszawa).

W związku z powyższym wnoszę i wywodzę jak na wstępie.`}
          />
          <Collapse>
            <CollapseTitle onClick={() => setOpened(!opened)}>
              Na jakie przepisy prawa się powołać?
              <Arrow style={{ float: "right" }} />
            </CollapseTitle>
            <CollapseBody data-opened={opened.toString()}>
              <List>
                {laws.map((law, index) => (
                  <Item key={index}>{law}</Item>
                ))}
              </List>
            </CollapseBody>
          </Collapse>
        </Form>
      </>
    );
  }
);
