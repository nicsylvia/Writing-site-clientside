import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom"

const BlogPost = () => {
  return (
    <div>
        <Container>
          <Link style = {{textDecoration: "none"}}>
		  		<Card key={books._id}>
					<ImageHolder>
						<Image src={books.coverImage} />
						<Cont>
							<Button>{books.category}</Button>

							<TitleHold>
								<Title>{books.tittle}</Title>
							</TitleHold>
						</Cont>
					</ImageHolder>

                    <DownPart>
					<Hold>
						<AuthorImage col={
							"#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6)
						}>{books.authorImage}</AuthorImage>
						<AuthName>{books.author}</AuthName>
					</Hold>
					<ViewIcon>
						<AiOutlineEye />
						<span>19K</span>
					</ViewIcon>
				</DownPart>

                <HoverCard>
				<First>
					<Hold>
						<AuthorImage col={
							"#" + Math.floor(Math.random() * 10000000).toString(16).padStart(6)
						} >{books.authorImage}</AuthorImage>
						<AuthName>{books.author}</AuthName>
					</Hold>
					<But>+ View</But>
				</First>
				<Second>
					<MainImage src={books.coverImage} />
					<MainImage src={books.coverImage} />
					<MainImage src={books.coverImage} />
				</Second>
			</HoverCard>
			
    </div>
  )
}

export default BlogPost