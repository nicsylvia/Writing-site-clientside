import React from 'react'
import styled from 'styled-components';
import herovideo from "../Assets/heroVideo.mp4";
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
				src='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
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

				<h2>
					{" "}
					Explore the world’s leading Books <br /> and Authors
				</h2>
				<p>
					Millions of designers and agencies around the world showcase their
					portfolio work on Dribbble - the home to the world’s best design and
					creative professionals.
				</p>

				<InputHold>
					<Icon>
						<AiOutlineSearch />
					</Icon>
					<Input
						onKeyPress={SearchResult}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						placeholder='Search by author name'
					/>
				</InputHold>
			</Content>
		</Container>
    </Container>
    </div>
  )
}

export default Hero;

cconst Input = styled.input`
background-color: transparent;
border: none;
outline: none;
flex: 1;
`;

const InputHold = styled.div`
display: flex;
align-items: center;
height: 50px;
width: 350px;
background-color: white;
color: black;
border-radius: 25px;

@media screen and (max-width: 500px) {
    width: 280px;
}
`;
const Icon = styled.div`
margin-left: 10px;
margin-right: 10px;
font-size: 20px;
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

