import React from 'react'
import herovideo from "../Assets/heroVideo.mp4";
const Hero = () => {
  return (
    <div>
        <Container id='Hero'>
        <Maintext>
            <h3>The Simplest <br /> Way to Find Property</h3>
            <p>Search For Your Dream House - Easiest way to find your dream home </p>
          <InputField>
            <input type="search" placeholder = "Search by price, Agent, Location" />
            <Search>Search</Search>
          </InputField>
  
        </Maintext>
      <Slider {...settings}>
        <Container>
          <img src={slide1} alt="" />
        </Container>
        <Container>
          <img src={slide2} alt="" />
        </Container>
        <Container>
          <img src={slide3} alt="" />
        </Container>
        <Container>
          <img src={slide4} alt="" />
        </Container>
        <Container>
          <img src={slide5} alt="" />
        </Container>
        <Container>
          <img src={slide6} alt="" />
        </Container>
      
      </Slider>
    </Container>
    </div>
  )
}

export default Hero