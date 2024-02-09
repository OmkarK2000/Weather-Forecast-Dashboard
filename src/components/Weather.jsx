import { useState } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import TempCard from "./TempCard";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const key = "902778c34af9b54a30597c040f155b42";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    if(city === ""){
      return;
    }
    try {
      const response = await fetch(url);
      const result = await response.json();
      // console.log(result);
      setWeatherData(result);
      setCity('')
    } catch (err) {
      console.log(err);
    }
  };

  const windDirection = (deg) => {
    if (deg >= 0 && deg <= 23) {
      return "North";
    }
    else if (deg >= 337 && deg <= 360) {
      return "North";
    }
    else if (deg >= 24 && deg <= 68) {
      return "Northease";
    }
    else if (deg >= 69 && deg <= 113) {
      return "East";
    }
    else if (deg >= 114 && deg <= 158) {
      return "Southeast";
    }
    else if (deg >= 159 && deg <= 203) {
      return "South";
    }
    else if (deg >= 204 && deg <= 148) {
      return "Southwest";
    }
    else if (deg >= 249 && deg <= 293) {
      return "West";
    }
    else if (deg >= 294 && deg <= 336) {
      return "Northwest";
    }
  };

  const degSym = () => {
    return <i>{'\u00b0'}</i>;
  };

  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-center">
        <input className="w-[220px] bg-gray-200 text-sky-700 font-bold px-2 py-1 outline-none rounded" type="text" value={city} placeholder="Enter city name" onChange={(e) => setCity(e.target.value)} />
        <button className="ml-2 bg-red-400 p-1 rounded hover:bg-red-700 font-bold" onClick={fetchWeatherData}>Search</button> <br />
      </div>

      {weatherData && (
        <>
          <div className="flex justify-evenly flex-col md:flex-row mt-4 ">
            <div className="text-center md:text-left p-5">
                <h1 className="text-4xl font-bold">{weatherData.city.name}, {weatherData.city.country}</h1>
                <h4>{weatherData.list[0].dt_txt.slice(0, 10)}</h4>
                <div className="flex mt-4 justify-center md:mt-0">
                  <FaCloudMoon size={100} />
                  <div className="px-5">
                    <p className="text-6xl flex">{Math.round(weatherData.list[0].main.temp)}{degSym()}</p>
                    <span className="text-2xl">{(weatherData.list[0].weather[0].description)} </span>
                  </div>
                </div>
            </div>
            <span className="bg-gray-400 w-[1px]"></span>
            <div className="flex items-center justify-center">
              <div>
                <div className="flex gap-10 text-2xl">
                  <span><span className="flex">{Math.round(weatherData.list[0].main.temp_max)} {degSym()}  </span> Max temp.</span>
                  <span>{(weatherData.list[0].wind.speed)} <br /> Wind speed</span>
                </div>
                <div className="flex gap-10 text-2xl mt-6">
                  <span><span className="flex">{Math.round(weatherData.list[0].main.temp_min)} {degSym()}  </span> Min temp.</span>
                  <span>{windDirection(Math.round(weatherData.list[0].wind.deg))}  <br /> Wind direction. </span>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full mt-16" >
            <h3 className="text-center text-3xl">Next 5 days</h3>
            <TempCard weatherData={weatherData} />
          </div>
        </>
      )}



    </div>
  )
}

export default Weather