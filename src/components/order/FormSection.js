import React from 'react';
import styled from 'styled-components';

const FormSection = ( {label, required, max, children} ) => {
    return (
        <StyledSection>
            <FormLabel labelText={label} required={required} max={max} />
            <InputSection>
                {children}
            </InputSection>
        </StyledSection>
    );
};

const FormLabel = ( {labelText, required, max} ) => {
    return (
        <StyledSection label>
            <Label>{labelText}</Label>
            {(required) ? <MiscLabelText>* Required</MiscLabelText> : null}
            {(max) ? <MiscLabelText>Choose up to {max}</MiscLabelText> : null}
        </StyledSection>
    );
};

const StyledSection = styled.div`
    background-color: ${props => props.label ? 'lightgrey' : 'inherit'};
    width: 100%;
`;

const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* align-content: space-around; */
    justify-content: space-evenly;
    max-height: 20vh;
    margin: 0;
    padding: 10px 30px;
`;

const Label = styled.h4`
    margin: 0;
    padding: 10px 20px 0 20px;
`;

const MiscLabelText = styled.p`
    margin: 0;
    padding: 5px 18px;
`;

export default FormSection;
