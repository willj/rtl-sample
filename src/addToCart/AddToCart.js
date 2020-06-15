import React, { useState } from 'react';
import SizeVariant from './SizeVariant';
import ColorVariant from './ColorVariant';

function AddToCart({onAddToCart}) {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    function changeColor(e){
        if (e.target.checked) {
            setColor(e.target.value);
        }
    }

    function addToCart(){
        onAddToCart({
            size: size,
            color: color
        });
    }

    return (
        <div>
            <SizeVariant selectedSize={size} onChange={(e) => {setSize(e.target.value)}} />
            <ColorVariant selectedColor={color} onChange={changeColor} />

            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default AddToCart