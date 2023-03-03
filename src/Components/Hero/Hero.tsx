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

const Video = styled.video``;

