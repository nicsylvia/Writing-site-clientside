import React, { useState } from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  return (
    <div>
      <Container>
            <Wrapper>
            <Logo>SYLVIE</Logo>
            <Navigation>
                <Nav>Home</Nav>
                <Nav>About</Nav>
                <Nav>Contact Us</Nav>
                <Nav>Services</Nav>
                <Nav>Portfolios</Nav>
            </Navigation>
            <Buttons>
                <Login>LOGIN</Login>
                <SignUp>SIGN UP</SignUp>
            </Buttons>
            </Wrapper>
      </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    color: white;
    z-index: 999;
    span{
        font-size: 70px;
        display: none;
        cursor: pointer;
        @media screen and (max-width: 500px) {
            display: block;
        }
    }
`;
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    cursor: pointer;
    font-size: 30px;
`;
const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Nav = styled.div`
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        margin-bottom: 20px;
        border-top: 1px solid white;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }
`;
const Buttons = styled.div`
    display: flex;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Login = styled.div`
    margin-right: 10px;
    cursor: pointer;
    background-color: blue;
    padding: 10px 15px;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const SignUp = styled.div`
    cursor: pointer;
    background-color: blue;
    padding: 10px 15px;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
