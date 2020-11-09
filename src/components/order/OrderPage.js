import React, {useState} from 'react';
import axios from 'axios';
import Splash from '../Splash';
import Form from './Form';

const OrderPage = ( {cart, setCart} ) => {
    let [orders, setOrders] = useState([]);

    const addItemToCart = item => {     //bugged, should add to quantity of a duplicate if found in the cart
        let itemIsDuplicateOf = null;

        for (let [i, cartItem] of cart.entries()) {
            if (isDuplicate(item.details, cartItem)) {
                itemIsDuplicateOf = i;
                break;
            };
        };

        if (itemIsDuplicateOf) {
            let cartCopy = [...cart];
            cartCopy[itemIsDuplicateOf].quantity += item.quantity;
            setCart(cartCopy);
        } else {
            setCart( [...cart, item] )
        }

        axios
            .post('https://reqres.in/api/users', {data: cart[cart.length - 1]})
            .then(res => {
                setOrders([...orders, res.data]);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const isDuplicate = (a, b) => {
        if (!Array.isArray(a)) {
            if (a !== b) return false;
            else return true;
        } else {
            return (a.forEach((val_a, i) => isDuplicate(val_a, b[i])));
        };
    }
    
    return (
        <div>
            <Splash />
            <Form submitItem={addItemToCart} />
            {orders.map(item => <p key={`order-${item.id}`}>{JSON.stringify(item)}</p>)}
        </div>
    );
};

export default OrderPage;
