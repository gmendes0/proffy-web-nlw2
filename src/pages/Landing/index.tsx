import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import { DefaultContainer } from "../../styles";
import {
  Container,
  LogoContainer,
  Logo,
  Title,
  Hero,
  ButtonContainer,
  Button,
  StudyIcon,
  GiveClassesIcon,
  Connections,
  HeartIcon,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <DefaultContainer id="page-landing-content">
          <LogoContainer>
            <Logo src={logoImg} alt="Proffy" />
            <Title>Sua plataforma de estudos online.</Title>
          </LogoContainer>

          <Hero src={landingImg} alt="Plataforma de estudos" />

          <ButtonContainer>
            <Button href="" className="study">
              <StudyIcon src={studyIcon} alt="Estudar" />
              Estudar
            </Button>

            <Button href="" className="give-classes">
              <GiveClassesIcon src={giveClassesIcon} alt="Dar Aulas" />
              Dar Aulas
            </Button>
          </ButtonContainer>

          <Connections>
            Total de 200 conexões já realizadas
            <HeartIcon src={purpleHeartIcon} alt="Coração roxo" />
          </Connections>
        </DefaultContainer>
      </Container>
    </>
  );
};

export default Landing;
