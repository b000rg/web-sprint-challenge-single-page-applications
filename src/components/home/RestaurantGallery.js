import React from 'react';
import styled from 'styled-components';

import RestaurantCard from './RestaurantCard';

import {restaurants} from '../../data/restaurants.json';
let restaurantList = restaurants.slice(0, 5);

const RestaurantGallery = () => {
    return (
        <Gallery>
            <h2>Food Delivery in Whatever Town</h2>
            <CardsContainer>
                {restaurantList.map((restaurant) =>
                    <Card key={restaurant.id} restaurant={restaurant} />
                )}
            </CardsContainer>
        </Gallery>
    );
};

const Gallery = styled.div`
    width: 100%;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;

const Card = styled(RestaurantCard)`
    
`;

export default RestaurantGallery;
