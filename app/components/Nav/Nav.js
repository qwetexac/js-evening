import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

const Link = styled(NavLink)`
  font-size: 24px;
  text-align: left;
  width: 300px;
  text-decoration: none;
  color: white;
  font-weight: 400;
  opacity: 0.4;
  padding: 10px;

  &.active {
    opacity: 1;
  }
`;

const Nav = memo(() => (
  <Wrapper>
    <Link to="/" exact>
      Default state
    </Link>

    <Link to="/data-getter">With Data Getter</Link>
    <Link to="/render-in-viewport">Render in viewport</Link>
  </Wrapper>
));

export default Nav;
