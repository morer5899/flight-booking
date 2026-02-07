const { createAirplane, getAirplanes, getAirplane, destroyAirplane, updateAirplane } = require("./airplane-service");

module.exports = {
  AirplaneService: {
    createAirplane, getAirplanes, getAirplane, destroyAirplane,
    updateAirplane
  }
}