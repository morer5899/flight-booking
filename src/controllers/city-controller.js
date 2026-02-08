const { CityServices } = require("../services")
const { StatusCodes } = require("http-status-codes")
const { ErrorResponse, SuccessResponse } = require("../utils/common")
/*
* POST : /airplanes
*req-body {modelNumber: "airbus320",capacity:200}
 */
const createCity = async (req, res) => {
  try {
    const city = await CityServices.createCity(req.body);

    return res.status(StatusCodes.CREATED).json(SuccessResponse(city, "City created successfully"));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse(error, "Something went wrong while creating city"));
  }
};

const getCities = async (req, res) => {
  try {
    const cities = await CityServices.getCities();
    return res.status(StatusCodes.CREATED).json(SuccessResponse(cities));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse(error, "Something went wrong while creating city"));
  }
}

const getCity = async (req, res) => {
  try {
    const city = await CityServices.getCitiy(req.query.name);
    return res.status(StatusCodes.OK).json(SuccessResponse(city));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse(error, "Something went wrong while creating city"));
  }
}

const destroyCity = async (req, res) => {
  try {
    const city = await CityServices.destroyCity(req.params.id);
    return res.status(StatusCodes.OK).json(SuccessResponse(city));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse(error, "Something went wrong while creating city"));
  }
}

const updateCity = async (req, res) => {
  try {
    const city = await CityServices.updateCity(req.params.id,req.body);
    return res.status(StatusCodes.OK).json(SuccessResponse(city));
  } catch (error) {
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse(error, "Something went wrong while creating city"));
  }
}
module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
  updateCity
}