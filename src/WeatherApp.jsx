import { useState } from "react";
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const[weatherinfo,setWeatherinfo]=useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo);
    }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherinfo}/>
    </div>
  );
}
