import React from 'react';

function RegionPicker({selectedRegion, onChange}){
    return (
        <>
            <label htmlFor="region-select">Select region</label>
            <select id="region-select" value={selectedRegion} onChange={onChange}>
                <option>UK</option>
                <option>England</option>
                <option>Scotland</option>
                <option>Wales</option>
            </select>
        </>
    );
}

export default RegionPicker;