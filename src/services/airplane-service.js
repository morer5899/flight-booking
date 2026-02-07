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
    throw new AppError("Cannot get airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
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

const getAirplane=async(id)=>{
  try {
    const airplane=await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError("Cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

const destroyAirplane=async(id)=>{
   try {
    const airplane=await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to destroy is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError("Cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

const updateAirplane=async(id,data)=>{
   try {
    const airplane=await airplaneRepository.update(id,data);
    return airplane;
  } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to update is not present",
        StatusCodes.NOT_FOUND
      );
    }
     switch (error.name) {
      case "TypeError":
        throw new AppError("can not update the Airplane Object", StatusCodes.INTERNAL_SERVER_ERROR);
      case "SequelizeDatabaseError":
        throw new AppError(
          error.message || "Cannot update Airplane",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      case "SequelizeValidationError":
        {

          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          })
          throw new AppError(explanation || "cannot update Airplane object", StatusCodes.BAD_REQUEST)
        }

    }
    throw new AppError("Cannot get airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
}