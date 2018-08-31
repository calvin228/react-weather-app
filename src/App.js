import React, { Component } from "react";
import "./App.css";
import Forecasts from "./components/Forecasts/Forecasts";
import axios from "axios";

const APP_KEY = "bd5e378503939ddaee76f12ad7a97608";
class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: "",
      forecastData: [],
      loading: true
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${
              this.state.lat
            }&lon=${this.state.lon}&cnt=5&appid=${APP_KEY}&units=metric`
          )
          .then(response => {
            this.setState({
              forecastData: response.data.list.slice(0, 5),
              city: response.data.city.name,
              loading: false
            });
          })
          .catch(error => {
            console.log(error);
          });
      });
    } else {
      alert("Geolocation is not supported!");
    }
  }
  render() {
    return this.state.loading ? <div className="lds-dual-ring"></div> : (
      <div className="App">
        <div>
          <h4>5 Day Forecasts</h4>
          <span>{this.state.city}</span>
        </div>
        <Forecasts
          forecastData={this.state.forecastData}
          city={this.state.city}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
