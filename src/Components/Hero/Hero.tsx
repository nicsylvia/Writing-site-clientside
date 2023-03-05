import React, { useState} from 'react'
import styled from 'styled-components';
import herovideo from "../Assets/heroVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import GlobalButton from '../GlobalButtons/GlobalButtons';
import { useQuery } from '@tanstack/react-query';
import { SearchTittle } from '../ApiCalls/APIs';

const Hero = () => {

  // Search by tittle:
  

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
					<GlobalButton text='Religion' />
					<GlobalButton text='Universalism' />
					<GlobalButton text='Branding' />
					<GlobalButton text='Illustration' />
					<GlobalButton text='Worth' />
					<GlobalButton text='Knowledge' />
					<GlobalButton text='Rest' />
				</ButtonHold>

				<h3>Explore Augustine's Blog Posts</h3>
				<p>
					Writing helps calm the nerves for me and helps me pen down thoughts i want to ponder on in quiet moments. Explore and send me a message
				</p>

                <InputField>
                    <input type="search"
                    placeholder = "Search by blog tittle" />
                    <Search>Search</Search>
                </InputField>
			</Content>
		</Container>
    </div>
  )
}

export default Hero;

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
  background-color: #87CEEB;
  color: black;
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
margin-top: 50px;
/* justify-content: center; */
flex-direction: column;
align-items: center;
text-align: center;

h3 {
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

