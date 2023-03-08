import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
} from "react-icons/ai";
import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-scroll";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Augustine <br /> Writes 
        </Logo>
        <Copyright>
          <h4>CopyRight</h4>
          ©2023 <b>Sylvia</b>, Inc. All rights reserved. Terms of use Privacy
          Policy
        </Copyright>
        <Contact>
          <h4>Contact</h4>
          adimikeaugustine@gmail.com <br />
          <b>09072063269</b>
        </Contact>
        <Social>
          <Icon href="https://web.facebook.com/sanni.sundayemmanuel">
            <AiFillFacebook />
          </Icon>
          <Icon href="">
            <AiFillTwitterSquare />
          </Icon>
          <Icon href="">
            <AiFillGoogleSquare />
          </Icon>
          <Icon href="https://wa.me/234907206326">
            <BsWhatsapp />
          </Icon>
        </Social>
      </Wrapper>

      <Up offset={-100} smooth={true} duration={500} to="hero">
        <div>
          <HiArrowUp />
        </div>
      </Up>
    </Container>
  );
};

export default Footer;

const Up = styled(Link)`
  padding: 16px 17px;
  border-radius: 4px;
  cursor: pointer;
  background-color: purple;
  right: 1%;
  box-shadow: purple 0px 2px 2px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  position: fixed;
  bottom: 2%;

  @media screen and (max-width: 768px) {
    right: 3%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181820;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;
const Logo = styled.div`
  cursor: pointer;
  font-weight: bolder;
  font-size: 10px;
  text-align: center;
  font-family: serif;
  color: white;
  border: 4px solid purple;
  padding: 5px;

  @media screen and (max-width: 500px) {
    padding: 1px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 1px;
    font-size: 15px;
  }
`;
const Copyright = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    padding: 1px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  h4 {
    color: white;

    margin: 0%;
  }
`;
const Contact = styled.span`
  color: white;
  font-weight: 600;
  cursor: pointer;
  h4 {
    color: white;
    margin: 0%;
  }
  @media screen and (max-width: 500px) {
    padding: 1px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: purple;
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
  transition: all 360ms;
  :hover {
    color: white;
  }
`;