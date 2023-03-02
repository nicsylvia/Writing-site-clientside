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

export default Header