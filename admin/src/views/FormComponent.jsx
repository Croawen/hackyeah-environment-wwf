/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Form, Button } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import wretch from "wretch";
const types = {
  ILLEGAL_DUMPS: "ILLEGAL_DUMPS",
  ANIMAL_ABUSE: "ANIMAL_ABUSE",
  BURNING_GRASS: "BURNING_GRASS",
  FOREST_OUTBREAK: "FOREST_OUTBREAK",
  POACHING: "POACHING",
  WASTE_INCINERATION: "WASTE_INCINERATION",
  BIRD_FINDING: "BIRD FINDING",
  NEST: "NEST",
  WILD_ANIMALS: "WILD_ANIMALS",
  DEFORESTATION: "DEFORESTATION",
  CARS: "CARS",
  RUBBISH: "RUBBISH"
};

const api = {
  noAuth: () => wretch().content("application/json")
};

class FormComponent extends Component {
  state = {
    name: "",
    city: "",
    address: "",
    email: "",
    postcode: "",
    longitude: 0,
    latitude: 0,
    type: types.ANIMAL_ABUSE
  };

  async create() {
    const url = "http://hackyeah-environment-backend.herokuapp.com";

    const res = await api
      .noAuth()
      .url(`${url}/admin-locations`)
      .post(this.state)
      .res();

    window.location.href = "/locations";
    console.log(res);
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Nazwa</label>
                  <input
                    onChange={e => {
                      this.setState({ name: e.target.value });
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.name}
                    placeholder="Podaj nazwę instytucji"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Miasto</label>
                  <input
                    onChange={e => {
                      this.setState({ city: e.target.value });
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.city}
                    placeholder="Podaj miasto"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Adres</label>
                  <input
                    onChange={e => {
                      this.setState({ address: e.target.value });
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.address}
                    placeholder="Podaj adres"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Adres email</label>
                  <input
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    placeholder="Podaj email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Kod pocztowy</label>
                  <input
                    onChange={e => {
                      this.setState({ postcode: e.target.value });
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.postcode}
                    placeholder="Podaj kod pocztowy"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">
                    Szerokość geograficzna
                  </label>
                  <input
                    onChange={e => {
                      this.setState({ longitude: parseFloat(e.target.value) });
                    }}
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.longitude}
                    placeholder="Podaj szer. geogr."
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Długość geograficzna</label>
                  <input
                    onChange={e => {
                      this.setState({ latitude: parseFloat(e.target.value) });
                    }}
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.latitude}
                    placeholder="Podaj dł. geogr."
                  />
                </div>
                <select
                  className="form-control"
                  onChange={e => {
                    this.setState({ type: e.target.value });
                  }}
                  value={this.state.type}
                >
                  {Object.keys(types).map(t => {
                    return <option value={t}>{t}</option>;
                  })}
                </select>
                <br />
                <button
                  onClick={() => {
                    this.create();
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FormComponent;
