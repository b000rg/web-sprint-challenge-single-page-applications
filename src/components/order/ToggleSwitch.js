import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = ( {name, substitutions, handleChange} ) => {
    return (
        <Toggle
            type="checkbox"
            name={name}
            onChange={handleChange}
            checked={substitutions.includes(name)}
        />
    );
};

const Toggle = styled.input`

`;

export default ToggleSwitch;