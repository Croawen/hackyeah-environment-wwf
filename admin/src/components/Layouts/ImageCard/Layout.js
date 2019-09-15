import React from "react";
import { Card, CardImgOverlay, Col, Container, Row } from "reactstrap";
import styled from "styled-components";

const LeftSideImg = styled.img`
  /* max-height: 85vh; */
  height: auto;
`;

const Title = styled.h2`
  margin-top: calc(35% - 1.25rem);
  margin-left: calc(12% - 1.25rem);
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
`;

const Description = styled.p`
  margin-left: calc(12% - 1.25rem);
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
  white-space: pre-wrap;
  word-break: break-word;
`;

const StyledRow = styled(Row)`
  max-height: 100vh;
`;

const LeftCol = styled(Col)`
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
`;

const RightCol = styled(Col)`
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  @media (max-width: 767.98px) {
    border-radius: 36px;
    min-height: calc(100vh - 50px);
  }
`;

const ImageCardLayout = ({ title, description, children }) => {
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12">
            <Card className="bg-transparent border-0 mb-0">
              <StyledRow className="no-gutters">
                <LeftCol className="d-none d-md-flex">
                  <CardImgOverlay>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                  </CardImgOverlay>
                </LeftCol>
                <RightCol className="d-flex bg-white flex-column justify-content-center">
                  {children}
                </RightCol>
              </StyledRow>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCardLayout;
