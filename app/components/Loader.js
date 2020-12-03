import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

import { Wrapper } from './Widget/Wrapper';

const rotate = keyframes`
  0, 100% { opacity: 0.5 }
  50% { opacity: 1 }
`;

const LoaderBlock = styled.div`
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 10px;
  align-self: center;
  margin: auto;
`;

const Block = styled.div`
  opacity: 0.5;
  background: rgba(0, 0, 0, 0.3);
  animation: ${rotate} 1s linear infinite;
`;

const Loader = memo(() => (
  <Wrapper>
    <LoaderBlock>
      {[...Array(64).keys()].map(i => (
        <Block key={i} />
      ))}
    </LoaderBlock>
  </Wrapper>
));

export default Loader;
