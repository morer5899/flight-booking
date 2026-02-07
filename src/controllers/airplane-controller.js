const { AirplaneService } = require("../services")
const { StatusCodes } = require("http-status-codes")
const { ErrorResponse, SuccessResponse } = require("../utils/common")
/*
* POST : /airplanes
*req-body {modelNumber: "airbus320",capacity:200}
 */
const createAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneService(req.body);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json({
      ...SuccessResponse,
      data: airplane
    });
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

const getAirplanes = async (req, res) => {
  try {
 
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json({
      ...SuccessResponse,
      data: airplanes
    });
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

module.exports = { createAirplane, getAirplanes };