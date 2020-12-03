import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from 'components/Nav';
import DefaultState from 'containers/DefaultState';
import StateWithDataGetter from 'containers/StateWithDataGetter';
import ViewportState from 'containers/ViewportState';
import NotFoundPage from 'containers/NotFoundPage';

import GlobalStyle from '../../global-styles';

const Wrapper = styled.div`
  display: flex;
`;

const ReportWrapper = styled.div`
  padding: 24px;
  flex: 1;
`;

export default function App() {
  return (
    <Wrapper>
      <Nav />
      <ReportWrapper>
        <Switch>
          <Route exact path="/" component={DefaultState} />
          <Route exact path="/data-getter" component={StateWithDataGetter} />

          <Route exact path="/render-in-viewport" component={ViewportState} />

          <Route component={NotFoundPage} />
        </Switch>
      </ReportWrapper>
      <GlobalStyle />
    </Wrapper>
  );
}
