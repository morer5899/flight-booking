const validateCreateResponse = require("./airplane-middlewares");
const cityValidateCreateResponse=require("./city-middlewares")
module.exports = {
  AirplaneMiddleware: validateCreateResponse,
  CityMiddleware:cityValidateCreateResponse
};
