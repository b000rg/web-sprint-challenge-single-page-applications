import React from 'react';
import styled from 'styled-components';

import FormSection from './FormSection';

import {toppings as toppingsData} from '../../data/pizzaOptions.json';

const Toppings = ( {toppings, updateFormData} ) => {
    const handleChange = evt => {
        if (toppings.length <= toppingsData.max) {
            if (toppings.length < toppingsData.max && evt.target.checked) {
                updateFormData('toppings', [...toppings, evt.target.name])
            } else {
                updateFormData('toppings', toppings.filter(topping => topping !== evt.target.name));
            };
        } else {
            evt.preventDefault();
        };
    };
    
    return (
        <FormSection label="Add Toppings" max={toppingsData.max}>
            {toppingsData.options.map((option, i) =>
                <CheckboxOption key={`toppings-${i}`}>
                    <Checkbox
                        type="checkbox"
                        name={option.value}
                        onChange={handleChange}
                        checked={toppings.includes(option.value)}
                    />{option.label}
                </CheckboxOption>
            )}
        </FormSection>
    );
};

const CheckboxOption = styled.label`

`;

const Checkbox = styled.input`

`;

export default Toppings;
