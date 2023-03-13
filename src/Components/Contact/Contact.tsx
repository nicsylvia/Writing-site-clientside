import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                {/* <Content></Content>
                <Form></Form> */}
            </Wrapper>
        </Container>
    </div>
  )
}

export default Contact;

const Prof = styled.div`
  display: flex;
  flex-direction: column;
  span{
    color: blue;
  }
  a {
    margin-top: -13px;
  }
`;
const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #00a85a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  :hover {
    transform: scale(0.9);
    background-color: #f5f5f5;
    color: #00a85a;
    border: 1px solid #00a85a;
  }
`;
const Box = styled.textarea`
  /* width: 200px; */
  display: flex;
  padding-left: 15px;
  padding-top: 20px;
  height: 90px;
  border: 1px solid #ced4da;
  outline: none;
  resize: none;
  ::placeholder {
    font-size: 17px;
  }
`;
const Input = styled.input`
  /* width: 100%; */
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  ::placeholder {
    font-size: 17px;
  }
`;
const Right = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
    justify-content: center; */
  /* background-color: red; */
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;
const Up = styled.div`
  h2{
        font-size: 30px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    }
`;
const Left = styled.div`
  width: 35%;
  @media screen and (max-width: 425px) {
    margin-top: -40px;
  }
  span{
    color: blue;
  }
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 40px;
  p {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Top = styled.div`
  h1 {
    font-size: 35px;
    color: #00a85a;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  /* background-color: red; */
  margin-top: 80px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
`;