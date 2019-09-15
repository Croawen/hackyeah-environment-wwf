import React from "react";
import {
  Button,
  Col,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

export class LoginFormComponent extends React.PureComponent {
  render() {
    const {
      values,
      errors,
      handleSubmit,
      handleChange,
      touched,
      isSubmitting
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h1>Logowanie</h1>
        <p className="text-muted">Zaloguj się do panelu</p>

        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-user" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="login"
            placeholder={"Login"}
            onChange={handleChange}
            value={values.login}
            invalid={touched.login && errors.login ? true : false}
          />
          <FormFeedback>{errors.login}</FormFeedback>
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="password"
            name="password"
            placeholder={"Hasło"}
            onChange={handleChange}
            value={values.password}
            invalid={touched.password && errors.password ? true : false}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </InputGroup>

        <Row>
          <Col xs="6">
            <Button color="primary" className="px-4" type="submit">
              {isSubmitting ? "Trwa logowanie" : "Zaloguj się"}
            </Button>
          </Col>
          {/* <Col xs="6" className="text-right">
                        <Button color="link" className="px-0" type="button" onClick={redirectToPasswordResetPage}>
                            {translate("users.form.button-forgot-password-label")}
                        </Button>
                    </Col> */}
        </Row>
      </form>
    );
  }
}
