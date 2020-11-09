import React from 'react';
import styled from 'styled-components';

import FormSection from './FormSection';
import ToggleSwitch from './ToggleSwitch';

import {substitutions as substitutionsData} from '../../data/pizzaOptions.json';

const Substitutions = ( {substitutions, updateFormData} ) => {
    const handleChange = evt => {   // needs to be updated for future substitution options
        if (substitutions.includes(evt.target.name)) {
            updateFormData('substitutions', []);
        } else {
            updateFormData('substitutions', [evt.target.name]);
        }
    };
    
    return (
        <FormSection label="Choice of Substitute" max={substitutionsData.max}>
            {substitutionsData.options.map((option, i) => 
                <ToggleOption key={`substitutions${i}`}>
                    <ToggleSwitch
                        name={option.value}
                        substitutions={substitutions}
                        handleChange={handleChange}
                    />{option.label}
                </ToggleOption>
            )}
        </FormSection>
    );
};

const ToggleOption = styled.label`

`;

export default Substitutions;
