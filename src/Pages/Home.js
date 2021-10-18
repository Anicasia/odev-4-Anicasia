import React, { useState } from 'react';
import citiesTurkey from '../components/Cities';
import CitySelection from '../components/CitySelection';
import WeatherBox from '../components/WeatherBox';


function Home() {
    const [cities, setCities] = useState(citiesTurkey);
    const [selectedCity, setSelectedCity] = useState(citiesTurkey[0]);

    return (
        <div >
            <CitySelection cities={cities}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
            <WeatherBox selectedCity={selectedCity} />
        </div>
    )
}

export default Home
