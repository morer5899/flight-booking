const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const cityRepository = new CityRepository();

const createCity = async (data) => {
  try {
    return await cityRepository.create(data);

  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      const explanation = error.errors?.map(err => err.message);
      throw new AppError(
        explanation || error.message,
        StatusCodes.BAD_REQUEST
      );
    }
    if (
      error.name === "SequelizeDatabaseError" ||
      error instanceof TypeError
    ) {
      throw new AppError(
        error.message || "Cannot create City",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError(
      "Cannot create City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getCities=async()=>{
  try {
    const cities=await cityRepository.getAll();
    // console.log(cities)
    return cities;
  } catch (error) {
    throw new AppError(
      "Cannot get cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

const getCitiy=async(name)=>{
  try {
    const city=await cityRepository.getByName(name);
    return city;
  } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError("Cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

const destroyCity=async(id)=>{
  try {
    const city=await cityRepository.destroy(id);
    return city;
  } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested to destroy is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError("Cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

const updateCity=async(id,data)=>{
  try {
    const city=await cityRepository.update(id,data);
    return city;
  } catch (error) {
       if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested to update is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError("Cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
module.exports = {
  createCity,
  getCities,
  getCitiy,
  destroyCity,
  updateCity
}