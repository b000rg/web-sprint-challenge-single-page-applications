import React from 'react';

import FormSection from './FormSection';

import {size as sizeData} from '../../data/pizzaOptions.json';

const Size = ( {size, updateFormData} ) => {
    const handleChange = evt => {
        updateFormData('size', evt.target.value);
    };

    return (
        <FormSection label="Choice of Size" required>
            <select name="size" onChange={handleChange} value={size}>
                <option value="">select one</option>
                {sizeData.options.map((option, i) => 
                    <option key={`size-${i}`} value={option.value}>{option.label}</option>
                )}
            </select>
        </FormSection>
    ); 
};

export default Size;
