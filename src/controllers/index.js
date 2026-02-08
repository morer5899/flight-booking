const createAirplane = require('./airplane-controller.js');
const createCity  = require('./city-controller.js');
const { info } = require('./info-controller.js');

module.exports = {
  info,
  AirplaneController:createAirplane,
  CityController:createCity
};
