import React, { useEffect, useState } from 'react';

function EnergyMixResults({region}){
    const [energyData, setEnergyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        let apiPath = region === 'UK' ? 'generation' : `regional/${region.toLowerCase()}`;

        fetch(`https://api.carbonintensity.org.uk/${apiPath}`)
        .then(response => response.json())
        .then(json => {
            if (region === 'UK'){
                setEnergyData(json.data.generationmix);
            } else {
                setEnergyData(json.data[0].data[0].generationmix);
            }
            
            setIsLoading(false);
        });
    }, [region]);

    if (isLoading) {
        return <p>Loading Results...</p>;
    }

    return (
        <table title={`${region} Electricity Generation Sources`}>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Percent</th>
                </tr>
            </thead>
            <tbody>
                {energyData.map((source, index) => (
                    <tr key={index}>
                        <td>{source.fuel}</td>
                        <td>{source.perc}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EnergyMixResults;