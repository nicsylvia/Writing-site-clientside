import React from 'react';
import styled from "styled-components"

interface Iprops{
    text: string;
}

const GlobalButton: React.FC<Iprops> = ({text}) => {
  return (
    <div>
        <Button>{text}</Button>
    </div>
  )
};

export default GlobalButton;

const Button = styled.button`
    background-color: #87CEEB;
    color: black;
    border: none;
    font-weight: bold;
    outline: none;
    border-radius: 40px;
    padding: 20px 40px;
    transition: all 350ms;
    display: flex;
    align-items: center;
    justify-content: center;
    margin : 10px;
    cursor: pointer;
    :hover{
        transform: scale(0.95);
        color: #87CEEB;
        background-color: white;
    }
`;