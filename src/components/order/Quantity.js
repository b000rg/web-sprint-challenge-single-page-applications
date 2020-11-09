import React from 'react';
import styled from 'styled-components';

const Quantity = ( {quantity, updateFormData} ) => {    
    return (
        <QuantityInput
            type="number"
            min="1"
            onChange={evt => {updateFormData('quantity', evt.target.value)}}
        />
    );
};

const QuantityInput = styled.input`
    flex-grow: 1;
    margin: 5px;
`;

export default Quantity;
