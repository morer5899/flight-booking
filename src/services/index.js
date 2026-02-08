const { createAirplane, getAirplanes, getAirplane, destroyAirplane, updateAirplane } = require("./airplane-service");
const { createCity, getCities, getCitiy, destroyCity, updateCity } = require("./city-services");

module.exports = {
  AirplaneService: {
    createAirplane, getAirplanes, getAirplane, destroyAirplane,
    updateAirplane
  },
  CityServices:{
    createCity,
    getCities,
    getCitiy,
    destroyCity,
    updateCity
  }
}