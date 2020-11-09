import React from 'react';
import styled from 'styled-components';

import FormSection from './FormSection';

const Name = ( {name, updateFormData} ) => {
    const handleChange = evt => {
        updateFormData('name', evt.target.value);
    };

    return (
        <FormSection label="Who is this order for?" required>
            <NameInput
                type="text"
                value={name}
                onChange={handleChange}
            />
        </FormSection>
    );
};

const NameInput = styled.input`

`;

export default Name;
