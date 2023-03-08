import React from 'react'
import styled from 'styled-components';
import green from "../Assets/green.png"
import blue from "../Assets/blue.png"
import purple from "../Assets/purple.png"
import logo from "../Assets/logo.png"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                {/* <Logo to = "/">
                    <MyLogo src={logo} />
                </Logo> */}
                <RegisterCard>
                    <Wrap>
                        <h2> Sign up to have your own account</h2>
                        <p>28 Writes</p>
                        <Form>
                            <Div>
                                <h4>Full Name</h4>
                                <Input placeholder = "Full Name" type="text" />
                            </Div>
                            <Div>
                                <h4>Email Address</h4>
                                <Input placeholder = "Email Address" type = "email" />
                            </Div>
                            <Div>
                                <h4>Password</h4>
                                <Input placeholder = "Password" type="Password" />
                            </Div>
                            <Div>
                                <h4>How Did You Hear About Us? (Optional)</h4>
                                <select>
                                    <option>Click to Select</option>
                                    <option>Facebook</option>
                                    <option>Twitter</option>
                                    <option>Instagram</option>
                                    <option>Friend/Family/Co Worker Referrer</option>
                                    <option>Google Search</option>
                                    <option>Google PlayStore</option>
                                    <option>Online Blog</option>
                                    <option>Local Newspaper</option>
                                    <option>At an event</option>
                                    <option>Others</option>
                                </select>
                            </Div>
                            <BtnWrap to = "/login">
                            <Button> CREATE ACCOUNT</Button>
  
                            </BtnWrap>                        </Form>
                    </Wrap>
                </RegisterCard>
                <P to = "/login">Already have an account? Log In</P>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SignUp;

const Container = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
    background-color: skyblue;
    background-image: url(${blue}), url(${green}), url(${purple});
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: left -1% top -15%, right -7.5% top -1%, right -5% bottom -5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 10px 0px 10px 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Logo = styled(Link)`
    cursor: pointer;
    font-size: 30px;
    width: 200px;
    height: 70px;
    font-weight: bold;
`;
const MyLogo = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 50px;
  object-fit: contain;
  /* background-color: green; */
`;
const RegisterCard = styled.div`
    width: 550px;
    /* height: 600px; */
    /* padding: 10px 0px 10px 0px; */
    background-color: yellow;
    border-radius: 20px 20px 20px 0px;
    display: flex;
    justify-content: center;
`;
const Wrap = styled.div`
    width: 450px;
    padding: 10px 0px 10px 0px;
    background-color: red;
    margin-top: 50px;
    text-align: center;
    h2{
        color: skyblue;
        margin: 0;
    }
    p{
      font-weight: bold;
      font-style: italic;
    }
`;
const Form = styled.form`
margin-top: 30px;
    /* background-color: red; */
`;
const Input = styled.input`
    width: calc(450px - 15px);
    height: 70px;
    background-color: #EDF2F7;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 15px;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px 10px 0px;
    h4{
        margin: 0;
        margin-bottom: 5px;
        text-align: start;
    }
    select{
    width: 450px;
    height: 70px;
    background-color: #EDF2F7;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 20px;
    }
`;
const BtnWrap = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
const Button = styled.button`
cursor: pointer;
    background-color: #062B6F;
    width: 450px;
    height: 60px;
    border-radius: 20px 10px 10px 0px;
    outline: none;
    border: none;
    color: white;
    margin-top: 50px;
    font-size: 18px;
    font-weight: bold;
`;
const P = styled(Link)`
    cursor: pointer;
    margin-top: 20px;
    color: white;
    text-decoration: none;
`;