import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  > #page-landing-content {
    @media (min-width: 1100px) {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        "logo hero hero"
        "buttons buttons total";
    }
  }
`;

export const LogoContainer = styled.div`
  > img {
    height: 10rem;
  }

  text-align: center;
  margin-bottom: 3.2rem;

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    > img {
      height: 100%;
    }
  }
`;

export const Logo = styled.img``;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;

  @media (min-width: 1100px) {
    text-align: initial;
    font-size: 3.6rem;
  }
`;

export const Hero = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const Button = styled.a`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--color-button-text);
  transition: background-color 0.2s;

  &:first-child {
    margin-right: 1.6rem;
  }

  > img {
    width: 4rem;
  }

  &.study {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  &.give-classes {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;

    > img {
      margin-right: 2.4rem;
    }
  }
`;

export const StudyIcon = styled.img``;

export const GiveClassesIcon = styled.img``;

export const Connections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;

export const HeartIcon = styled.img``;
