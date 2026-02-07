const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {

    switch (error.name) {
      case "TypeError":
        throw new AppError("can not create a new Airplane Object", StatusCodes.INTERNAL_SERVER_ERROR);
      case "SequelizeDatabaseError":
        throw new AppError(
          error.message || "Cannot create Airplane",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      case "SequelizeValidationError":
        {

          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          })
          throw new AppError(explanation || "cannot create new Airplane object", StatusCodes.BAD_REQUEST)
        }

    }
    throw new AppError("Cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

const getAirplanes=async()=>{
  try {
    const airplanes=await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
     throw new AppError("Cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createAirplane,
  getAirplanes
}