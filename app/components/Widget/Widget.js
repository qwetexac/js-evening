import React, { useMemo } from 'react';
import styled from 'styled-components';

import Loader from 'components/Loader';
import { Wrapper } from './Wrapper';

const Item = styled.div`
  height: 50px;
  flex: 1 1 50px;
  background: #ef9a9a;

  &:nth-child(2n) {
    background: #f44336;
  }

  &:nth-child(3n) {
    background: #9575cd;
  }

  &:nth-child(5n) {
    background: #ee6969;
  }

  &:nth-child(7n) {
    background: #eea6ba;
  }
`;

const items = [...Array(300).keys()];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const Widget = ({ isLoading }) => {
  const data = useMemo(() => {
    if (!isLoading) {
      sleep(100);
    }

    return [];
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {items.map(i => (
        <Item key={i} data={data} />
      ))}
    </Wrapper>
  );
};

export default Widget;
