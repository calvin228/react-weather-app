import React from "react";
import Forecast from "./Forecast/Forecast";
import "./Forecasts.css";

const Forecasts = props => {
  return (
    <div className="forecasts">
      <Forecast forecastData={props.forecastData} />
    </div>
  );
};

export default Forecasts;
