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

    </div>
  )
}

export default MainBlog