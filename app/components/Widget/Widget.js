import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: aquamarine;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  height: 100px;
  min-width: 100px;
  background: black;
  flex: 1;
  
  &:nth-child(2n) {
    background: red;
  }
  
  &:nth-child(3n) {
    background: blue;
  }
  
  &:nth-child(5n) {
    background: yellow;
  }
  
  &:nth-child(5n) {
    background: green;
  }
`;

const items = [...Array(100).keys()]

const Widget = () => {
  return (
    <Wrapper>
      {items.map(i => (
        <Item key={i} />
      ))}
    </Wrapper>
  )
};

export default Widget;
