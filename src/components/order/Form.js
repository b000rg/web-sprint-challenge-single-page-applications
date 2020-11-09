import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';

import {Name, Size, Sauce, Toppings, Substitutions, SpecialInstructions} from './PizzaOptions';
import {defaultOptions} from '../../data/pizzaOptions.json';
import Quantity from './Quantity';  // these two kept separate for future modularity
import Submit from './Submit';
import schema from './schema';

const defaultFormData = {details: {...defaultOptions, type: 'pizza', name: ''}, quantity: 1};

const Form = ( {submitItem} ) => {
    const [valid, setValid] = useState(false);
const [price/* , setPrice */] = useState(0);
    const [formData, setFormData] = useState( {...defaultFormData} );
    const [errors, setErrors] = useState({
        name: '',
        size: '',
        sauce: '',
        toppings: '',
        substitutions: ''
    });

    // useEffect(() => {
    //     setPrice()
    // }, [formData])

    useEffect(() => {
        schema.isValid(formData.details).then(valid => {
            dataIsValid(valid);
        });
    }, [formData]);

    const dataIsValid = valid => {
        setValid(valid);
    };

    const handleSubmit = evt => {    
        if (valid) {
            submitItem(formData);
            setFormData({...defaultFormData});
        };
    };

    const updateFormData = (changedDataName, changedDataValue) => {
        if (changedDataName !== 'quantity') {
            Yup
                .reach(schema, changedDataName)
                .validate(changedDataValue)
                .then(() => {
                    setErrors( {...errors, [changedDataName]: ''} )
                })
                .catch(err => {
                    setErrors( {...errors, [changedDataName]: err.errors[0]} );
                });
        };

        if (formData[changedDataName] !== undefined) {    // changed data IS NOT nested
            setFormData( {...formData, [changedDataName]: changedDataValue} );
        } else {                            // changed data IS nested
            setFormData( {...formData, details: {...formData.details, [changedDataName]: changedDataValue} } );
        };
    };

    return (
        <StyledForm>
            <FormTitle>Build Your Own Pizza</FormTitle>
            <Name name={formData.details.name} updateFormData={updateFormData} />
            <Size size={formData.details.size} updateFormData={updateFormData} />
            <Sauce sauce={formData.details.sauce} updateFormData={updateFormData} />
            <Toppings toppings={formData.details.toppings} updateFormData={updateFormData} />
            <Substitutions substitutions={formData.details.substitutions} updateFormData={updateFormData} />
            <SpecialInstructions specialInstructions={formData.details.specialInstructions} updateFormData={updateFormData} />
            <SubmitSection quantity={formData.quantity} price={price} updateFormData={updateFormData} handleSubmit={handleSubmit} />
            {Object.keys(errors).map(errorKey => <p key={`errors-${errorKey}`}>{errors[errorKey]}</p>)}
        </StyledForm>
    );
};

const SubmitSection = ( {quantity, price, updateFormData, handleSubmit} ) => {
    return (
        <StyledSubmitSection>
            <Quantity quantity={quantity} updateFormData={updateFormData} />
            <Submit price={price} updateFormData={updateFormData} handleSubmit={handleSubmit} />
        </StyledSubmitSection>
    );
};

const StyledForm = styled.form`
    width: 75%;
    margin: 0 auto;
    border: 1px solid black;
    background-color: whitesmoke;
`;

const FormTitle = styled.h3`
    margin-left: 50px;
`;

const StyledSubmitSection = styled.div`
    display: flex;
    margin: 10px;
    padding-top: 10px;
    border-top: 1px solid black;
`;

export default Form;
