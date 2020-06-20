import React, { useState } from 'react';
import RegionPicker from './RegionPicker';
import EnergyMixResults from './EnergyMixResults';

function EnergyMix(){
    const [region, setRegion] = useState('UK');

    return (
        <div style={{maxWidth: '400px',margin: '0 auto'}}>
            <h2>Live National Grid Electricity Mix</h2>
            <p><a href="https://carbon-intensity.github.io/api-definitions/">https://carbon-intensity.github.io/api-definitions</a></p>

            <RegionPicker selectedRegion={region} onChange={(e) => { setRegion(e.target.value); }} />

            <EnergyMixResults region={region} />
        </div>
    );
}

export default EnergyMix;