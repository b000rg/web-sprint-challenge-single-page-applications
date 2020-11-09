import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <Heading>Lambda Eats</Heading>
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/pizza">Order</StyledLink>
            </Nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: sienna;
    z-index: 1;
`;

const Heading = styled.h1`
    margin: 5px 15px;
`;

const Nav = styled.nav`
    margin: 5px 15px;
`;

const StyledLink = styled(Link)`
    display: inline;
    background-color: lightblue;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
    box-shadow: 2px 2px 4px #3c1e11;
`;

export default Header;
