import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/index/background.jpg";
import { ReactComponent as ScrollDownIcon } from "../assets/index/scrollDown.svg";
import NavBar from "../components/NavBar";
import { REPORT_TYPES, SOCIAL_ICONS } from "../constants";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const ScrollDownButton = styled(ScrollDownIcon)`
  cursor: pointer;
  position: absolute;
  bottom: 54px;
  left: 50%;
  transform: translate(-50%, 0px);
`;

const Container = styled.div`
  background-color: #0d0d0d;
  background-image: url(${background});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: top center;
`;

const Header = styled.h3`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
`;

const GridItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;

const GridItemCaption = styled.figcaption`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: rgba(58, 52, 42, 0.7);

  ::before {
    opacity: 0;
    position: absolute;
    top: 30px;
    right: 30px;
    bottom: 30px;
    left: 30px;
    border: 1px solid #fff;
    content: "";
  }
`;

const GridItemHeader = styled.div`
  margin: 0;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  white-space: pre;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.36px;
  display: flex;
  flex-direction: column;
`;

const GridItemSpan = styled.span`
  transform: translate(0px, calc(15px));
`;

const GridItemButton = styled.button`
  cursor: pointer;
  margin: 32px auto auto auto;
  padding: 8px 17px;
  object-fit: contain;
  border-radius: 1.3px;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #3c1c0b;
  border: 0;
  line-height: 1;
  opacity: 0;
`;

const GridItem = styled.figure`
  &,
  * {
    transition: all 0.35s;
  }

  margin: 0;
  position: relative;
  display: flex;
  background: -webkit-linear-gradient(
    45deg,
    #22682a 0%,
    #9b4a1b 40%,
    #3a342a 100%
  );
  background: linear-gradient(45deg, #22682a 0%, #9b4a1b 40%, #3a342a 100%);

  grid-area: ${props => props.area};

  :hover {
    ${GridItemSpan} {
      transform: translate(0px, 0px);
    }
    ${GridItemButton} {
      opacity: 1;
    }
    ${GridItemImage} {
      opacity: 0.4;
    }
    ${GridItemCaption} {
      ::before {
        opacity: 1;
      }
      background-color: rgba(58, 52, 42, 0);
    }
  }
`;

const Grid = styled.div`
  margin-top: 56px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "aa aa bb bb cc cc" "dd dd dd ee ee ee" "ff ff gg gg hh hh" "ii ii jj jj kk kk";
`;

const Content = styled.div`
  padding: 104px 152px;
`;

const SocialIcon = styled.img``;

const SocialIconLink = styled(Link)`
  width: 48px;
  height: 48px;
  background: #0d0d0d;
  border: solid 2px #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    margin-left: 34px;
  }
  transition: all 0.35s;
  :hover {
    filter: invert(1);
  }
`;

const ShareIcons = styled.div`
  display: flex;
  margin-top: 32px;
`;

const SubText = styled.span`
  font-size: 18px;
  color: #ffffff;
`;

const FooterTitle = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 56px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 52px;
`;

const IndexPage = () => {
  const contentRef = useRef(null);

  return (
    <Container>
      <Wrapper>
        <NavBar />
        <ScrollDownButton
          onClick={() => {
            contentRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }}
        />
      </Wrapper>
      <Content ref={contentRef}>
        <Header>Wybierz typ zgłoszenia</Header>
        <Grid>
          {REPORT_TYPES.map(({ img, type, label, area }, i) => (
            <GridItem className="effect-oscar" area={area}>
              <GridItemImage src={img} alt="img09" />
              <GridItemCaption>
                <GridItemHeader>
                  <GridItemSpan>{label}</GridItemSpan>
                  <Link to={`/report/${type}`}>
                    <GridItemButton>Dodaj zgłoszenie</GridItemButton>
                  </Link>
                </GridItemHeader>
              </GridItemCaption>
            </GridItem>
          ))}
        </Grid>
      </Content>
      <Footer>
        <FooterTitle>Chronimy przyrodę z ludźmi i dla ludzi.</FooterTitle>
        <SubText>Dołącz do nas</SubText>
        <ShareIcons>
          {SOCIAL_ICONS.map(({ img, to }) => (
            <SocialIconLink>
              <SocialIcon src={img} />
            </SocialIconLink>
          ))}
        </ShareIcons>
      </Footer>
    </Container>
  );
};

export default IndexPage;
