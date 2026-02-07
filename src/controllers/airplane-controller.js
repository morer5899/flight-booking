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
    return res.status(StatusCodes.CREATED).json(SuccessResponse(airplane));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}

const getAirplanes = async (req, res) => {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    return res.status(StatusCodes.OK).json(
      SuccessResponse(airplanes)
    );
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}

const getAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    return res.status(StatusCodes.OK).json(SuccessResponse(airplane));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}


const destroyAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneService.destroyAirplane(req.params.id);
    return res.status(StatusCodes.OK).json(SuccessResponse(airplane));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse(error));
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane
};