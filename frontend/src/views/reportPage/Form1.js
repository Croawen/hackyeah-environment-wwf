import { Map, Marker } from "google-maps-react";
import React from "react";
import styled from "styled-components";

const StyledMap = styled(Map)`
  position: relative !important;
`;

const LocateMeButton = styled.button`
  width: 100%;
  min-height: 35px;
  border-radius: 2px;
  border: solid 1px #0d0d0d;
  background-color: #0d0d0d;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  color: #ffffff;
  cursor: pointer;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;

  div:nth-child(2) {
    margin: 0 12px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #0d0d0d;
  }

  div:first-child,
  div:last-child {
    border-bottom: 1px solid #0d0d0d;
    width: 100%;
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

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #0d0d0d;
`;

const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  margin-right: 20px;
`;

const MapColumn = styled.div`
  margin-left: 20px;
  flex-grow: 1;
  background-color: white;
`;

const LocationSection = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0d0d0d;
  display: flex;
  margin-bottom: 16px;
`;

const Form = styled.form``;

export default ({
  handleSubmit,
  values,
  handleChange,
  google,
  getGeolocation
}) => {
  return (
    <Form>
      <SectionTitle>Lokalizacja</SectionTitle>
      <LocationSection>
        <InputColumn>
          <InputLabel>
            <InputLabelText>Miejscowość</InputLabelText>
            <Input name="city" value={values.city} onChange={handleChange} />
          </InputLabel>
          <InputLabel>
            <InputLabelText>Ulica</InputLabelText>
            <Input
              name="street"
              value={values.street}
              onChange={handleChange}
            />
          </InputLabel>
          <InputLabel>
            <InputLabelText>Kod pocztowy</InputLabelText>
            <Input
              name="postalCode"
              value={values.postalCode}
              onChange={handleChange}
            />
          </InputLabel>
          <Divider>
            <div></div>
            <div>lub</div>
            <div></div>
          </Divider>
          <LocateMeButton type="button" onClick={() => getGeolocation()}>
            Zlokalizuj mnie
          </LocateMeButton>
        </InputColumn>
        <MapColumn>
          <StyledMap
            streetViewControl={false}
            fullscreenControl={false}
            google={google}
            zoom={6}
            initialCenter={{ lat: 52, lng: 19 }}>
            <Marker
              draggable={false}
              onClick={() => {}}
              position={{ lat: values.lat, lng: values.long }}
              name={"Current location"}
            />
          </StyledMap>
        </MapColumn>
      </LocationSection>
    </Form>
  );
};
