import React from 'react'

const SingleBlog = () => {
  return (
    <div>
        <Container>
			<Wrapper>
				<First> 
					<Hold>
						<AuthorImage>{singleData?.authorImage}</AuthorImage>
						<AuthName>{singleData?.author}</AuthName>
					</Hold>
				</First>
				<MainImage src={singleData?.coverImage} />
				<h2>{singleData?.tittle}</h2>
				<Desc>
					{singleData?.summary}
				</Desc>
			</Wrapper>
		</Container>
    </div>
  )
}

export default SingleBlog