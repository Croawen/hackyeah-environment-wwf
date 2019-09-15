import React, { useContext } from "react";
import styled from "styled-components";
import { SubscriptionContext } from "../../../../screens/Dashboard/SubscriptionModalCtxProvider";
import ResponsiveSquare from "../../../common/ResponsiveSquare";

const StyledResponsiveSquare = styled(ResponsiveSquare)`
  max-width: 108px;
  max-height: 108px;
  border-radius: 4px;
  border: solid 0.9px var(--coral-40);
  background-color: var(--coral-10);
  margin: auto;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const ActivateSubscriptionsButton = () => {
  const ctx = useContext(SubscriptionContext);

  return (
    <Container>
      <StyledResponsiveSquare
        onClick={() => {
          ctx.setActivateOpen(true);
        }}
      ></StyledResponsiveSquare>
    </Container>
  );
};

export default ActivateSubscriptionsButton;
