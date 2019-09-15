import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import externalApi from "../../services/externalApi";
import Form2 from "./Form1";

const Form = styled.form``;

const Form3 = styled.form`
  margin-top: 32px;
  margin-bottom: 56px;
`;

const PointMail = styled.span`
  ::before {
  }
  font-size: 14px;
  color: #0d0d0d;
`;

const PointAddress = styled.span`
  white-space: pre;
  font-size: 14px;
  color: #0d0d0d;
  margin-bottom: 16px;
`;

const PointTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #0d0d0d;
  margin-bottom: 8px;
`;

const Point = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: solid 1px #707070;
  padding: 20px;
  cursor: pointer;

  &[data-selected="true"] {
    border-color: #6dbf10;
  }

  flex-shrink: 0;
  flex-grow: 1;
  max-width: calc(100% / 3 - 60px);
  box-sizing: border-box;
  margin: 0 15px;
`;

const Points = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const ReportDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReportHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  color: #0d0d0d;
  margin-bottom: 20px;
`;

const ReportList = styled.ul`
  margin-top: 0;
  margin-bottom: 16px;
`;

const ReportListItem = styled.li`
  font-size: 14px;
  color: #0d0d0d;
  line-height: 2.29;
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
    setFieldValue,
    selectedPoint,
    setPoint
  }) => {
    const [points, setPoints] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const geocoder = new google.maps.Geocoder();

    useEffect(() => {
      externalApi
        .url("/locations/organizations")
        .get({ type })
        .json(({ items }) => {
          setOrganizations(items);
        });
    }, [type]);

    useEffect(() => {
      externalApi
        .url("/locations/search")
        .post({
          longitude: values.long,
          latitude: values.lat,
          type: type
        })
        .json(json => {
          setPoints(json);
        });
    }, [type, values.lat, values.long]);

    useEffect(() => {
      geocoder.geocode(
        { address: `${values.street}, ${values.postalCode} ${values.city}` },
        function(results, status) {
          if (status === "OK") {
            const targetLocation = results[0].geometry.location;
            setFieldValue("lat", targetLocation.lat());
            setFieldValue("long", targetLocation.lng());
          }
        }
      );
    }, [
      values.city,
      values.street,
      values.postalCode,
      setFieldValue,
      geocoder
    ]);

    return (
      <>
        <Form>
          <ReportDetails>
            <ReportHeader>Komu zgłosić?</ReportHeader>
            <ReportList>
              {organizations.map(val => (
                <ReportListItem>{val}</ReportListItem>
              ))}
            </ReportList>
          </ReportDetails>
        </Form>
        <Form2
          values={values}
          handleChange={handleChange}
          google={google}
          getGeolocation={() => {
            window.navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const long = position.coords.longitude;
              setFieldValue("lat", lat);
              setFieldValue("long", long);
            });
          }}
        />
        {(values.lat && (
          <Form3>
            <ReportHeader>Wybierz znalezione punkty</ReportHeader>
            <Points>
              {points.map((item, i, a) => {
                const { id, name, address, city, postCode, email } = item;
                return (
                  <Point
                    key={id}
                    onClick={() => setPoint(item)}
                    data-selected={(
                      (selectedPoint && item.id === selectedPoint.id) ||
                      false
                    ).toString()}>
                    <PointTitle>{name}</PointTitle>
                    <PointAddress>
                      Adres:
                      <br />
                      {address}
                      <br />
                      {postCode} {city}
                    </PointAddress>
                    <PointMail>{email}</PointMail>
                  </Point>
                );
              })}
            </Points>
          </Form3>
        )) ||
          ""}
      </>
    );
  }
);
