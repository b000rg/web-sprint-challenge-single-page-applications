import React from 'react';
import styled from 'styled-components';

import FormSection from './FormSection';

const SpecialInstructions = ( {specialInstructions, updateFormData} ) => {
    return (
        <FormSection label="Special Instructions">
            <StyledTextArea
                name="specialInstructions"
                value={specialInstructions}
                onChange={evt => {updateFormData('specialInstructions', evt.target.value)}}
            />
        </FormSection>
    );
};

const StyledTextArea = styled.textarea`

`;

export default SpecialInstructions;
