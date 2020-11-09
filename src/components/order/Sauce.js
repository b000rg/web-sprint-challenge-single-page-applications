import React from 'react';
import styled from 'styled-components';

import FormSection from './FormSection';

import {sauce as sauceData} from '../../data/pizzaOptions.json';

const Sauce = ( {sauce, updateFormData} ) => {
    const handleChange = evt => {
        updateFormData('sauce', evt.target.value);
    };

    return (
        <FormSection label="Choice of Sauce" required>
            {sauceData.options.map((option, i) => 
                <RadioOption key={`sauce-${i}`}>
                    <RadioButton
                        type="radio"
                        name="sauce"
                        value={option.value}
                        onChange={handleChange}
                        checked={option.value === sauce}
                    />
                    {option.label}
                </RadioOption>
            )}
        </FormSection>
    );
};

const RadioOption = styled.label`

`;

const RadioButton = styled.input`

`;

export default Sauce;