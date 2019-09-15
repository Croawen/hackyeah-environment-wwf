import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";
import { StyledInput } from "../../common/Inputs";

export const Header = styled.h3`
  font-size: 2.05rem;
  font-weight: 600;
  color: #101d4b;
`;

export const SubText = styled.p`
  font-size: 0.938rem;
  color: #3c4044;
`;

export const PasswordInput = props => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="position-relative d-flex align-items-center w-100">
      <StyledInput type={preview ? "text" : "password"} {...props} />
      <Button
        className="position-absolute bg-transparent border-0 p-0"
        style={{ right: "-36px" }}
        onClick={() => setPreview(!preview)}
      ></Button>
    </div>
  );
};

export const EmptySpace = styled.div`
  height: ${props => (props.default ? props.default : "65px")};
  @media (max-width: 767.98px) {
    height: ${props => (props.mobile ? props.mobile : "45px")};
  }
`;

export const BelowSubmitLink = styled(Link)`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #101d4b;
  margin-top: 13px;
`;

export const GreenIconCircle = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background-color: rgba(102, 215, 209, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
