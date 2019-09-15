import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardGroup, Col, Container, Row } from "reactstrap";

class LocationsPage extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup className="animated fadeIn">
                  <Card className="p-4">
                    <CardBody>{this.renderForm()}</CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    currentUser: state.currentUser
  }),
  dispatch => ({})
)(LocationsPage);
