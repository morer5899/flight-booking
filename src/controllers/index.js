const createAirplane = require('./airplane-controller.js');
const { info } = require('./info-controller.js');

module.exports = {
  info,
  AirplaneController:createAirplane
};
