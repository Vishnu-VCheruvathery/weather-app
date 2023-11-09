import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../App.css'

function Cities(props) {
    const [cityData, setCityData] = useState([]); // State variable to hold data for each city

    const cities = ['New York', 'Tokyo', 'New Delhi'];

    useEffect(() => {
        // Fetch weather data for each city
        const fetchData = async () => {
            const data = [];
            for (const city of cities) {
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
                    );
                    const cityWeatherData = await response.json();
                    data.push(cityWeatherData);
                } catch (err) {
                    console.error(err);
                }
            }
            setCityData(data);
        };

        fetchData();
    }, []);

    return (
        <div className='boxes'>
            {cityData.map((cityWeatherData, index) => (
                <Card key={index} data={cityWeatherData} />
            ))}
        </div>
    );
}

export default Cities;