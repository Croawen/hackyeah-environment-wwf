import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Stepper from "../components/Stepper";
import { Formik } from "formik";
import Form2 from "./reportPage/Form1";
import background from "../assets/reportBg.jpg";
import { withRouter } from "react-router-dom";
import Step1 from "./reportPage/Step1";
import Step2 from "./reportPage/Step2";

const BlackButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #0d0d0d;
  color: #ffffff;
  background-color: #0d0d0d;
  font-size: 14px;
`;

const WhiteButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #0d0d0d;
  color: #0d0d0d;
  background-color: #ffffff;
  font-size: 14px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0 9px;
  }
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
  background-image: url(${background});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: top center;

  position: relative;
  height: 100vh;
  overflow: auto;
`;

const FormPart = styled.div`
  background: white;
  margin-top: 32px;
  padding: 40px 56px;

  display: flex;
  flex-direction: column;
  margin-bottom: 102px;
`;

const steps = [Step1, Step2];

const ReportPage = withRouter(({ history, google }) => {
  const [currentStep, setStep] = useState(1);

  const CurrentStepComponent = steps[currentStep];

  return (
    <Formik
      validationSchema={null}
      initialValues={{
        city: "",
        street: "",
        postalCode: "",
        lat: 0,
        long: 0,
        location: null
      }}
      enableReinitialize={false}
      onSubmit={(
        { city, street, postalCode, lat, long },
        { setSubmitting }
      ) => {
        //TODO
        setStep(currentStep + 1);
        setSubmitting(false);
      }}
      render={({ submitForm, ...props }) => (
        <Container>
          <NavBar />
          <Content>
            <StatusPart>
              <Stepper
                buttons={[
                  "Lokalizacja",
                  "Zgłoszenie",
                  "Materiały",
                  "Dane osobowe"
                ]}
                current={currentStep + 1}></Stepper>
            </StatusPart>
            <FormPart>
              <CurrentStepComponent {...props} google={google} />
              <Buttons>
                <WhiteButton onClick={() => history.goBack()}>
                  Powrót
                </WhiteButton>
                <BlackButton onClick={() => submitForm()}>
                  Kontynuuj
                </BlackButton>
              </Buttons>
            </FormPart>
          </Content>
        </Container>
      )}
    />
  );
});

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaCd5nFWfHN-jjUcfUWtI3oPz_jHww43o",
  LoadingContainer: () => <p>Loading...</p>
})(ReportPage);
