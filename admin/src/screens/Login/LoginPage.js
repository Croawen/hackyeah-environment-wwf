import { Formik } from "formik";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardGroup, Col, Container, Row } from "reactstrap";
import history from "../../redux/history";
import { LoginFormComponent } from "./LoginForm";

class LoginPage extends React.PureComponent {
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

  renderForm() {
    return (
      <Formik
        initialValues={{
          login: "",
          password: ""
        }}
        validate={values => {
          let errors = {};

          if (!values.login) errors.login = "Login jest wymagany.";

          if (!values.password) errors.password = "Hasło jest wymagane.";

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setTimeout(() => {
            setSubmitting(false);
            setStatus({ isLoggedIn: true });
            this.props.redirectToHomePage();
          }, 1000);
        }}
        render={formikProps => (
          <LoginFormComponent {...formikProps} {...this.props} />
        )}
      />
    );
  }
}

export default connect(
  state => ({
    currentUser: state.currentUser
  }),
  dispatch => ({
    logIn: logInData => dispatch.currentUser.logIn(logInData),
    redirectToHomePage: () => {
      history.push("/");
    }
  })
)(LoginPage);
