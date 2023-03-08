import React, { useState } from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi"
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {

  // State for the menu and cancel button to show
  const [toggle, setToggle] = useState(false);

  const showNavSide = () =>{
      setToggle(!toggle)
  }

  const removeNavSide = () =>{
      setToggle(false)
  }

  return (
    <div>
      <Container>
          <Wrapper>
            <WrapAll>
              <Logo to = "/">
                {/* <Img src={logo} /> */}
                <h3>
                    28 Writes
                </h3>
              </Logo>
              <Navigation>
                  <Nav  to = "/"  cc = "white">Home</Nav>
                  <Nav  to = "/send-me-a-message" cc = "white">Contact Me</Nav>
                  <Nav to = "/all-blogs"  cc = "white">Blogs</Nav>
              </Navigation>
            </WrapAll>
            <Buttons>
                <Login to = "/register">Sign Up</Login>
                <SignUp to = "/login">Upload Posts</SignUp>
            </Buttons>
          </Wrapper>

          {/* For the menu and cancel button to show */}
          {
                toggle ?  <Cancel onClick={removeNavSide}> <GiCancel /> </Cancel> :  
                <Hamburger  onClick={showNavSide}>
                <GiHamburgerMenu />
            </Hamburger> 
          }

            {/* For the navs to show on minimized screen */}
            {
                toggle ?  <NavSide>
                <Wrap>
                  <Nav to = "/"  cc = "white">Home</Nav>
                  <Nav to = "/send-me-a-message" cc = "white">Contact Me</Nav>
                  <Nav to = "/all-blogs"  cc = "white">Blogs</Nav>
                    <br />
                    <Login to = "/register">Sign Up</Login>
                    <br />
                    <br />
                  <SignUp to = "/login">Upload Posts</SignUp>
                </Wrap>
            </NavSide> : null
            }

      </Container>
    </div>
  )
}

export default Header;

const Hamburger = styled.div`
    font-size: 30px;
    display: none;
    color: black;
    cursor: pointer;
    margin-right: 10px;
    @media screen and (max-width: 500px) {
        display: block;
    }
`;
const Cancel = styled.div`
    font-size: 30px;
    display: none;
    color: black;
    cursor: pointer;
    margin-right: 10px;
    @media screen and (max-width: 500px) {
        display: block;
    }
`;
const NavSide = styled.div`
    width: 100%;
    height: 85vh;
    position: absolute;
    top: 70px;
    @media screen and (max-width: 500px) {
        display: block;
    }
`;
const Wrap = styled.div`
    background-color: rgba(50, 145, 201, 0.747);
    backdrop-filter: blur(2px);
    width: 400px;
    height: 85vh;
    color: white;
    font-size: 20px;
    padding-top: 20px;
    border-radius: 0px 0px 5px 0px;
`;

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #181820;
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
    /* background-color: red; */
    justify-content: space-between;
`;
const Logo = styled(Link)`
    cursor: pointer;
    width: 100px;
    height: 70px;
    font-weight: bold;
`;
const WrapAll = styled.div`
  /* background-color: orange; */
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 50px;
  object-fit: contain;
  /* background-color: green; */
`;
const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    /* background-color: brown; */
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Nav = styled(Link)<{cc: string}>`
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: ${(props) => props.cc};
    text-decoration: none;
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
const Login = styled(Link)`
    margin-right: 10px;
    cursor: pointer;
    background-color: purple;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const SignUp = styled(Link)`
    cursor: pointer;
    color: white;
    text-decoration: none;
    background-color: purple;
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
