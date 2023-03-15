import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Midcart() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);       

    function addToCart(index, e) {
        e.preventDefault();
        setCart([...cart,index]);
    }

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                console.log(response);
                setItems(response.data.products);
            });
    }, []);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div className='mid'>
            <div className='header'>
                <h1>Shopping Cart</h1>
                <p>Cart {cart.length}</p>
            </div>
            {items.map((element, index) => {
                return (
                    <div className='content' key={index}>
                        <img src={element.images[0]} alt='' />
                        <h1>{element.title}</h1>
                        <a href='?' onClick={(e) => addToCart(index, e)}>
                            Add To Cart
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Midcart;


// The first useEffect is used to fetch data from an API using Axios library.This effect will be called only once when the component is mounted for the first time because it has an empty dependency array([]) as its second argument.

// The second useEffect is used to save the cart data into sessionStorage whenever the cart state changes.This effect will be called whenever the cart state changes.

// Both useEffect hooks are used to execute certain side effects in response to some change, but they have different dependencies and purposes.The first one fetches data, while the second one saves the cart data to sessionStorage.