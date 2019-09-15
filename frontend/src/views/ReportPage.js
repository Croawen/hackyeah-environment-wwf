import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

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
  padding: 9px 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-weight: 500;
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
  background-color: red;
`;

const LocationSection = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0d0d0d;
  display: flex;
`;

const Form = styled.form`
  background: white;
  margin-top: 32px;
  padding: 40px 56px;
`;

const StatusPart = styled.div`
  background: white;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding-top: 56px;
`;

const Container = styled.div`
  background-color: #0d0d0d;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: top center;

  position: relative;
  height: 100vh;
  overflow: auto;
`;

const StyledMap = styled(Map)`
  position: relative !important;
`;

const ReportPage = ({ google }) => {
  return (
    <Container>
      <NavBar />
      <Content>
        <StatusPart>stepper{/* <Stepper></Stepper> */}</StatusPart>
        <Form>
          <SectionTitle>Lokalizacja</SectionTitle>
          <LocationSection>
            <InputColumn>
              <InputLabel>
                <InputLabelText> Miejscowość</InputLabelText>
                <Input />
              </InputLabel>
              <InputLabel>
                <InputLabelText> Ulica</InputLabelText>
                <Input />
              </InputLabel>
              <InputLabel>
                <InputLabelText> Kod pocztowy</InputLabelText>
                <Input />
              </InputLabel>
              <Divider>
                <div></div>
                <div>lub</div>
                <div></div>
              </Divider>
              <LocateMeButton>Zlokalizuj mnie</LocateMeButton>
            </InputColumn>
            <MapColumn>
              <StyledMap
                google={google}
                zoom={6}
                initialCenter={{ lat: 52, lng: 19 }}>
                {/* <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />
                <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow> */}
              </StyledMap>
            </MapColumn>
          </LocationSection>
        </Form>
      </Content>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaCd5nFWfHN-jjUcfUWtI3oPz_jHww43o",
  LoadingContainer: () => <p>Loading...</p>
})(ReportPage);
