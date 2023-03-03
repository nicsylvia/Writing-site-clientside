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
}