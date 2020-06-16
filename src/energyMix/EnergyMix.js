import React, { useState } from 'react';

function EnergyMix(){
    const [region, setRegion] = useState('UK');

    return (
        <div>
            <h2>Live National Grid Electricity mix</h2>
            <p><a href="https://carbon-intensity.github.io/api-definitions/">https://carbon-intensity.github.io/api-definitions</a></p>

            <label htmlFor="region-select">Select region</label>
            <select id="region-select" value={region} onChange={(e) => { setRegion(e.target.value); }}>
                <option>UK</option>
                <option>England</option>
                <option>Scotland</option>
                <option>Wales</option>
            </select>

        </div>
    );
}

export default EnergyMix;