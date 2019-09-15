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
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import wretch from "wretch";

const api = {
  noAuth: () => wretch().content("application/json")
};

class TableList extends Component {
  state = {
    items: null
  };

  async componentDidMount() {
    let url = "http://localhost:4000";
    if (process.env.API_URL) url = process.env.API_URL;

    const res = await api
      .noAuth()
      .url(`${url}/admin-reports`)
      .get()
      .json();

    if (res && res.items && res.items.length > 0) {
      this.setState({
        items: res.items
      });
    }

    console.log(res);
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              {this.state.items && (
                <Card
                  title="Raporty"
                  category="Lista zgłoszeń użytkowników"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>
                        <tr>
                          {Object.keys(this.state.items[0]).map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.items.map(item => {
                          return (
                            <tr key={item.id}>
                              {Object.keys(item).map(key => {
                                return <td key={key}>{item[key]}</td>;
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  }
                />
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
