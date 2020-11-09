import * as Yup from 'yup';

// import pizzaOptions from '../../data/pizzaOptions.json';

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('You must enter your name!')
        .min(2, 'Name must be longer than two characters.')
        .matches(/[a-zA-Z]+( [a-zA-Z]+)*/, 'Invalid characters! Letters and spaces only please.'),
    size: Yup
        .string()
        .required('You must select a size for your pizza!'),
        // .oneOf([pizzaOptions.size.options.map(option => option.value)], 'There was an issue with your size selection.'),
    sauce: Yup
        .string()
        .required('Somehow your sauce was deselected. Select your sauce again.'),
        // .oneOf([pizzaOptions.sauce.options.map(option => option.value)], 'There was an issue with your sauce selection.'),
    toppings: Yup
        .array()
        .of( Yup
            .string()
        //    .oneOf(pizzaOptions.toppings.options.map(option => option.value), 'There was an issue with your toppings selection.')
        )
        .max(10, 'That\'s more toppings than we can fit on one pizza!'),
    substitutions: Yup
        .array()
        .of( Yup
            .string()
        //    .oneOf(pizzaOptions.substitutions.options.map(option => option.value), 'There was an issue with your substitutions selection.')
        )
        .max(1)
});

export default schema;
