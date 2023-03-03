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
			
    </div>
  )
}

export default BlogPost