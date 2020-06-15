import React from 'react';
import ColorSwatch from './ColorSwatch';

function ColorVariant({selectedColor, onChange}){
    return (
        <div>
            <ColorSwatch label="Red" value="red" selectedColor={selectedColor} onChange={onChange} />
            <ColorSwatch label="Yellow" value="yellow" selectedColor={selectedColor} onChange={onChange} />
            <ColorSwatch label="Blue" value="blue" selectedColor={selectedColor} onChange={onChange} />
            <ColorSwatch label="Green" value="green" selectedColor={selectedColor} onChange={onChange} />
        </div>
    );
}

export default ColorVariant;