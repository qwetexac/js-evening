import React from 'react';
import styled from 'styled-components';

import Widget from 'components/Widget';

const ReportWrapper = styled.div`
  padding: 24px;
`;

const otherWidgets = [...Array(10).keys()]

export default function HomePage() {
  return (
    <ReportWrapper>
      <Widget />
      <Widget />
      <Widget />
      
      {/*{otherWidgets.map(i => (*/}
      {/*  <Widget key={i} />*/}
      {/*))}*/}
    </ReportWrapper>
  );
}
