import React from 'react';
import { useParams } from 'react-router-dom'
import Shoes from './../shoes.json';

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    console.log(shoe);

    if (!shoe)
        return <h2>Product Not Found</h2>
    return (
        <div>
            <h1>Product Items</h1>
            <div>
            <h3>{shoe.name}</h3>
            <img src={shoe.img} height={600} />
            </div>
        </div>
    )
}

export default ProductItem;