import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GetSinglePost } from '../ApiCalls/APIs';
import feyi from "../Assets/feyi.jpg"
import universalism from "../Assets/universalism.png"

const SingleBlog = () => {

	const {blogid} = useParams()

	//   Get single post:
	const SingleBlogPost = useQuery({
		queryKey: ["SingleBlog"],
		queryFn: () =>{
			return GetSinglePost(blogid!)
		}
	})

  return (
    <div>
       {
		SingleBlogPost?.data?.data.map((single: any) =>(
			<Container key={single._id}>
			<Wrapper>
				<First> 
					<Hold>
						<AuthorImage>
                            <Img src = {feyi} />
                        </AuthorImage>
						<AuthName>Augustine Adimike</AuthName>
					</Hold>
				</First>
				<MainImage src= {single.blogimage} />
				<h2>{single.blogname}</h2>
				<Desc>
					{single.blogdescription}
				</Desc>
			</Wrapper>
		</Container>
		))
	   }
    </div>
  )
}

export default SingleBlog;

const Wrapper = styled.div`
	width: 80%;
    /* background-color: red; */
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: left;
    margin-top: 50px;


	h2 {
		width: 100%;
	}
`;
const Desc = styled.div`
	font-size: 18px;
`;

const AuthorImage = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bold;
	margin-right: 10px;
`;
const AuthName = styled.div`
	font-weight: bold;
	font-size: 25px;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Hold = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 100%;
`;
const MainImage = styled.img`
	height: 500px;
	width: 100%;
	border-radius: 5px;
	/* background-color: #e7e6e6; */
    background-image: url(${universalism});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(10px);
	margin-right: 5px;
	object-fit: contain;
	margin-top: 30px;
`;
const First = styled.div`
	display: flex;
	margin-top: 50px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: left;
	width: 100%;
	padding-bottom: 70px;
`;