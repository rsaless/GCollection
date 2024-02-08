// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  padding: 10px 0;
`;

const StyledNav = styled.nav`
  text-align: center;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/games">Games</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/sleeves">Sleeves</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/login">Login</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;