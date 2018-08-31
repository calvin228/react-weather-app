import React from "react";
import "./Forecast.css";
import rain from "./images/rain.png";
import cloudy from "./images/cloudy.png";
import storm from "./images/storm.png";
import snow from "./images/snowing.png";

const Forecast = props => {
  return props.forecastData.map((data, index) => {
    const weatherImg = () => {
      if (data.weather[0].main.match(/rain/i)){
        return rain;
      } else if (data.weather[0].main.match(/cloud/i)){
        return cloudy;
      } else if (data.weather[0].main.match(/storm/i)){
        return storm;
      } else if (data.weather[0].main.match(/snow/i)){
        return snow; 
      } else {
        return cloudy;
      }
    }
    return (
      <div className="card" key={index}>
        <div className="card-body">
          <h5 className="card-title">{new Date(data.dt*1000).toDateString().substring(0,3)}</h5>
          <img src={weatherImg()} className="weather-icon" />
          <div className="card-text temp-min">
            {data.temp.min}
            &deg;
          </div>
          <div className="card-text">
            {data.temp.max}
            &deg;
          </div>
        </div>
      </div>
    );
  });
};

export default Forecast;
