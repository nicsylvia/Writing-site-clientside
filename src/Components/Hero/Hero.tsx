import React from 'react'
import styled from 'styled-components';
import herovideo from "../Assets/heroVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import GlobalButton from '../GlobalButtons/GlobalButtons';

const Hero = () => {
  return (
    <div>
        <Container>
			<Video
				// controls
				autoPlay
				loop
				playsInline
				muted
				src={ herovideo }
			/>

			<Content>
				<ButtonHold>
					<GlobalButton text='Discover' />
					<GlobalButton text='Animation' />
					<GlobalButton text='Branding' />
					<GlobalButton text='Illustration' />
					<GlobalButton text='Mobile' />
					<GlobalButton text='Mobile' />
					<GlobalButton text='Mobile' />
				</ButtonHold>

				<Maintext>
                    <h3>Explore Augustine's Blog Posts</h3>
                    <p>Augustine Writes </p>
                    <InputField>
                        <input type="search" placeholder = "Search by blog tittle" />
                        <Search>Search</Search>
                        </InputField>
  
                </Maintext>
			</Content>
		</Container>
    </div>
  )
}

export default Hero;

const Maintext = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  height : 100vh;
  width : 100%;
  z-index: 1;
  color : white;
  h3{
    font-size: 50px;
    margin: 0;
  }
  p{
    font-size: 20px;
    margin: 0;
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    p{
      font-size: 18px;
      /* background-color: black; */
    }
  }
  @media screen and (max-width: 425px) {
    h3{
      font-size: 30px;
    }
    p{
      /* font-size: 12px; */
      width: 280px;
      /* background-color: red; */
    }
  }
`;
const InputField = styled.div`
  display: flex;
  width: 650px;
  padding: 10px 0px 10px 0px;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  margin-top: 10px;
  /* background-color: blue; */
  input{
    width: 500px;
    padding: 15px 0px 15px 0px;
    /* height: 50px; */
    border-radius: 30px;
    background-color: white;
    outline: 0;
    border: 0;
    padding-left: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 450px;
    input{
      @media screen and (max-width: 768px) {
      width: 300px;
  }
    }
  }
  @media screen and (max-width: 425px) {
    width: 310px;
    /* background-color: blue; */
    input{
      @media screen and (max-width: 425px) {
      width: 220px;
  }
    }
  }
`;
const Search = styled.div`
  width: 120px;
  padding: 15px 0px 15px 0px;
  /* height: 50px; */
  border-radius: 30px;
  background-color: #005555;
  color: #F2F6F6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    width: 80px;
    padding: 10px 0px 10px 0px;
  }
`;

const ButtonHold = styled.div`
margin-top: 50px;
display: flex;
overflow-x: scroll;

justify-content: center;
align-items: center;
width: 100%;
::-webkit-scrollbar {
    width: 0;
}

@media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
}
`;

const Content = styled.div`
position: absolute;
height: 100%;
width: 100%;
display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
text-align: center;

h2 {
    font-size: 30px;
    margin: 0;
    margin-top: 30px;
}

p {
    width: 600px;

    @media screen and (min-width: 330px) and (max-width: 600px) {
        width: 320px;
    }
    @media screen and (max-width: 320px) {
        width: 280px;
    }
}
`;
const Video = styled.video`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
const Container = styled.div`
	width: 100%;
    height: calc(100vh - 70px);
	position: relative;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	color: white;
	/* padding-bottom: 30px; */

	::before {
		content: "";
		background-color: rgba(0, 0, 0, 0.83);
		position: absolute;
		height: 100%;
		width: 100%;
		/* padding-bottom: 20px; */
	}
`;

