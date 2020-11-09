import React from 'react';
import styled from 'styled-components';

const Submit = ( {handleSubmit, price} ) => {
    return (
        <Button onClick={evt => {handleSubmit(evt)}}>
            <ButtonLabel>Add to Order</ButtonLabel>
            <Price>{price}</Price>
        </Button>
    );
};

const Button = styled.span`
    flex-grow: 6;
    margin: 5px 20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    background-color: beige;
`;

const ButtonLabel = styled.p`
    display: inline;
    margin: 5px;
    margin-left: 30px;
`;

const Price = styled.p`
    display: inline;
    margin: 5px;
    margin-right: 30px;
`;

export default Submit;
