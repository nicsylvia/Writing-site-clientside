import React from 'react'
import styled from 'styled-components';
import hero from "../Assets/heroImg.jpg"

const Hero = () => {
    return (
      <div>
          <Container id='hero'>
              <Wrapper>
                  <h1>Posts</h1>
                  <p><a href="/">Home</a> / My-Blog</p>
              </Wrapper>
          </Container>
      </div>
    )
  }
  
  export default Hero;

  const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${hero});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: purple;
    position: relative;
    ::before{
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.83);
        position: absolute;
    }
`;
const Wrapper = styled.div`
    z-index: 2;
    text-align: center;
    a{
        text-decoration: none;
        color: white;
    }
    p{
        color: grey;
    }
`;