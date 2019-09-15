import { Formik } from "formik";
import { GoogleApiWrapper } from "google-maps-react";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/reportBg.jpg";
import NavBar from "../components/NavBar";
import Stepper from "../components/Stepper";
import Step1 from "./reportPage/Step1";
import Step2 from "./reportPage/Step2";
import Step3 from "./reportPage/Step3";
import Step4 from "./reportPage/Step4";
import Step5 from "./reportPage/Step5";
import externalApi from "../services/externalApi";

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
const steps = [Step1, Step2, Step3, Step4, Step5];

const ReportPage = withRouter(
  ({
    match: {
      params: { type }
    },
    history,
    google
  }) => {
    const [currentStep, setStep] = useState(0);

    const CurrentStepComponent = steps[currentStep];
    const [selectedPoint, setPoint] = useState(null);

    return (
      <Formik
        validationSchema={null}
        initialValues={{
          city: "",
          street: "",
          postalCode: "",
          lat: 0,
          long: 0,
          location: null,
          report: "",
          reason: "",
          evidences: [],
          photos: [],
          name: "",
          email: ""
        }}
        enableReinitialize={false}
        onSubmit={async (
          { city, street, postalCode, report, reason, name, email },
          { setSubmitting }
        ) => {
          if (currentStep < 3) {
            setStep(currentStep + 1);
            setSubmitting(false);
          } else if (currentStep === 3) {
            //send
            externalApi
              .url("/reports")
              .post({
                type: type,
                name: name.split(" ")[0],
                surname: name.split(" ").reverse()[0],
                city: city,
                email: email,
                address: street,
                postcode: postalCode,
                facilityName: selectedPoint.name,
                facilityCity: selectedPoint.city,
                facilityAddress: selectedPoint.address,
                facilityPostcode: selectedPoint.postCode,
                facilityEmail: selectedPoint.email,
                report: report,
                reason: reason,
                evidences: [],
                photos: []
              })
              .then(() => {
                setStep(currentStep + 1);
                setSubmitting(false);
              });
          } else if (currentStep === 4) {
            window.location.href = "/";
            setSubmitting(false);
          }
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
                <CurrentStepComponent
                  selectedPoint={selectedPoint}
                  setPoint={setPoint}
                  {...props}
                  submitForm={submitForm}
                  google={google}
                />
                <Buttons>
                  {currentStep !== 4 && (
                    <WhiteButton onClick={() => history.goBack()}>
                      Powrót
                    </WhiteButton>
                  )}
                  <BlackButton onClick={() => submitForm()}>
                    {currentStep === 4 ? "Zakończ" : "Kontynuuj"}
                  </BlackButton>
                </Buttons>
              </FormPart>
            </Content>
          </Container>
        )}
      />
    );
  }
);

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_KEY || "",
  LoadingContainer: () => <p>Loading...</p>
})(ReportPage);
