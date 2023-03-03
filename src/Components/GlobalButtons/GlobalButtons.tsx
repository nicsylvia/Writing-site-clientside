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
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
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
        color: black;
        background-color: white;
    }
`;