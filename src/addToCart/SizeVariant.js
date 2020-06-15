import React from 'react';

function SizeVariant({selectedSize, onChange}){
    return (
        <>
            <label htmlFor="sizeVariant">Size</label>
            <select id="sizeVariant" value={selectedSize} onChange={onChange}>
                <option></option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
        </>
    );
}

export default SizeVariant;