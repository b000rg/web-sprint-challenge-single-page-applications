import React from 'react';
import styled from 'styled-components';

import splashImg from '../assets/Pizza.jpg';

const Splash = () => {
    return (
        <Image src={splashImg} alt="Lambda Eats splash image" />
    );
};

const Image = styled.img`
    width: 100%;
`;

export default Splash;
