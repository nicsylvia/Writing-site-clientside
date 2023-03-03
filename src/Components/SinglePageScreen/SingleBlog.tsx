import React from 'react'
import styled from 'styled-components';
import feyi from "../Assets/feyi.jpg"
import universalism from "../Assets/universalism.png"

const SingleBlog = () => {
  return (
    <div>
        <Container>
			<Wrapper>
				<First> 
					<Hold>
						<AuthorImage>
                            <Img src = {feyi} />
                        </AuthorImage>
						<AuthName>Augustine Adimike</AuthName>
					</Hold>
				</First>
				<MainImage src= {universalism} />
				<h2>Universalism as a religion?</h2>
				<Desc>
                Universalism as the meaning of all the religion together or universalism as a particular religion which believes in the application of theological and philosophical concepts?

Universalism as a religion, is the theological and philosophical concepts with universal application. It believes in fundamental truth.
Universalism has some influence in some other various religion, like Christianity, Hinduism, Buddhism and some others.

Universalism has appeared several times in christian history, notably in the works of origin of Alexandria in the 3rd century as an organized body and had it’s founding in the united state in the middle of the 18th century.
The forerunner of universalism in the United States was George de Benneville (1703- 1793). He migrated from Europe to Pennsylvania where he preached and practiced medicine. The early universalist movement was given great impetus by the preaching of John Murray (1741-1815), he moved from England to colonial America in 1770. He propagated  the doctrine throughout  most of the colonies, often against much opposition from orthodox christians who believed that universalism would lead to immorality.

Like other religions, universalism has laws which guides us to be better in application and help us to understand better.
There are twelve laws of the universe:
1.  Law of divine oneness: This particular law just means that everything is connected.
2.  Law of vibration: everybody or everything has a unique frequency on which they vibrate on.
3. Law of attraction: whatever you are you will attract.
4. Law of correspondence: what’s above is also down below.
5. Law of action: whatever you manifest, also needs an aligned action.
6. Law of cause and effects: every thing you do has a consequence.
7. Law of compensation:  all your right actions will be rewarded.
8. Law of perpetual transmutation of energy: energy can neither be destroyed or created. energy will always move and will always change.
9. Law of relativity: it’s always relative.
10. Law of polarity: everything has two sides, this is where duality comes in.
11. Law of rhythm: nothing is permanent.
12. Law of gender: for any manifestation there must be balance of energies.
religion as a whole has a purpose and a role it plays with everything we do. But the sole purpose of universalism is to view all the shared features of all humans. And also to bring us together regardless of the different segregation other religion has brought, being under the universe, makes all of us one and a universalist. In essence it fosters oneness amongst us.

What is the purpose of universalism?
religion as a whole has a purpose and a role it plays with everything we do. But the sole purpose of universalism is to view all the shared features of all humans. And also to bring us together regardless of the different segregation other religion has brought, being under the universe, makes all of us one and a universalist. In essence it fosters oneness amongst us.

Principles of universalism:
It alludes that it is possible to apply generalized value, norms and concepts to all people of different segregation. Norms may include: focusing on human needs, rights, biological and psychological  processes and are based on the perspective that all people are basically equivalent.

Do universalist believe in God?
Universalism believes in the concept that God is only one person. They don’t believe in the trinity and Jesus Christ was the son of God. They also refer to God as the universe.

Do extremism exist among universalist?

Yes,
they don’t believe totally in the universe, and don’t see any essence for the different other religions
Are they universalist that believe in other religions? yes
some people of other religions combine their beliefs and with the law of the universe, and also some says it aligns with their doctrines and teachings.
				</Desc>
			</Wrapper>
		</Container>
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
	background-color: #bb3d6e;
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
	background-color: #e7e6e6;
	margin-right: 5px;
	object-fit: contain;
	margin-top: 30px;
`;
const First = styled.div`
	display: flex;
	margin-top: 50px;
`;
const AuthImage = styled.div``;
const Name = styled.div``;
const But = styled.div`
	height: 30px;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: silver;
	border-radius: 5px;
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