import React from 'react';
import styled from 'styled-components';

const RestaurantCard = ( {restaurant} ) => {
    return (
        <StyledDiv>
            <Image src={`https://loremflickr.com/640/360/restaurant?rando=${restaurant.id}`} />
            <Name>{restaurant.name}</Name>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    background-color: grey;
    width: 30%;
    margin: 20px 0;
`;

const Image = styled.img`
    width: 100%;
`;

const Name = styled.h3`

`;

export default RestaurantCard;
