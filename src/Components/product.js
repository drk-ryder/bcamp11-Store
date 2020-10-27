import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';

function product() {
    return (
        <div>
            <h1>Products</h1>
            <div className="App-shoes">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} className='link' to = {`/product/${keyName}`}>
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height={200} alt="ShoeImage"/>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default product;