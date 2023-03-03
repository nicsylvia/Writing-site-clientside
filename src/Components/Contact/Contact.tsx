import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Content></Content>
                <Form></Form>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Contact;

const Container = styled.div`
    width: 100%;
    height: 600px;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
`;
const Wrapper = styled.div`
    width: 90%;
    height: 500px;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: blue;
`;
const Content = styled.div`
    width: 450px;
    background-color: green;
    height: 450px;
`;
const Form = styled.div`
    width: 450px;
    background-color: orange;
    height: 450px;
`;