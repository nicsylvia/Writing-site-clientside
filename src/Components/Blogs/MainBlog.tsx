import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import universalism from "../Assets/universalism.png"
import brother from "../Assets/brother.png";

const MainBlog = () => {
  return (
    <div>
        <div>
        <Container>
          <Link to = "/single-blog-post" style = {{textDecoration: "none"}}>
		  		<Card>
					<ImageHolder>
						<Image src={universalism} />
						<Cont>
							<Button>Religion</Button>

							<TitleHold>
								<Title>Universalism as a religion?</Title>
							</TitleHold>
						</Cont>
					</ImageHolder>

                    <DownPart>
					<Hold>
						<AuthorImage>
                            <Img src = {brother} />
                        </AuthorImage>
						<AuthName>Augustine Adimike</AuthName>
					</Hold>
					<ViewIcon>
						<AiOutlineEye />
						<span>0K</span>
					</ViewIcon>
				</DownPart>

                <HoverCard>
				<First>
					<Hold>
                    <AuthorImage>
                            <Img src = {brother} />
                    </AuthorImage>
						<AuthName>Augustine Adimike</AuthName>
					</Hold>
					<But>+ View</But>
				</First>
				<Second>
					<MainImage src={universalism} />
					<MainImage src={universalism} />
					<MainImage src={universalism} />
				</Second>
			</HoverCard>

            </Card>
		  </Link>
		</Container>

    </div>
  )
}

export default MainBlog