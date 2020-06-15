import React from 'react';

function ColorSwatch({label, value, selectedColor, onChange}){
    const isChecked = (selectedColor === value);

    return (
        <label>
            {label}
            <input type="radio" name="color" value={value} onChange={onChange} checked={isChecked} />
        </label>
    );
}

export default ColorSwatch;