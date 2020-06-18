import React, { useEffect, useState } from 'react';

function EnergyMixResults(){
    const [energyData, setEnergyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch('https://api.carbonintensity.org.uk/generation')
        .then(response => response.json())
        .then(json => {
            setEnergyData(json.data.generationmix);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading Results...</p>;
    }

    return (
        <table title="UK Electricity Generation Sources">
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