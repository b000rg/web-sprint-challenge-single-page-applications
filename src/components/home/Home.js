import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Splash from '../Splash';
import RestaurantGallery from './RestaurantGallery';

const Home = () => {
    const buttonTransition = (evt, reverse) => {
        evt.target.style['box-shadow'] = (reverse) ? 'none' : '3px 3px 8px darkslategrey';
    };

    return (
        <HomeContainer>
            <SplashContainer>
                <Splash />
                <SplashOverlaidText>
                    <Motto>Your favorite food, delivered while coding</Motto>
                    <StyledLink onMouseEnter={evt => {buttonTransition(evt)}} onMouseLeave={evt => {buttonTransition(evt, true)}} to="/pizza">Pizza?</StyledLink>
                </SplashOverlaidText>
            </SplashContainer>
            <RestaurantGallery />
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    
`;

const SplashContainer = styled.div`
    position: relative;
    text-align: center;
`;

const SplashOverlaidText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid grey;
    background-color: rgba(89, 102, 115, 0.35);
`;

const Motto = styled.h2`

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    padding: 5px 15px;
    background-color: #374048;
    border-radius: 7px;
    border: 1px inset whitesmoke;
    transition: box-shadow 0.3s
`;

export default Home;
