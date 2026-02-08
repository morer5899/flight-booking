const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
function validateCreateResponse(req, res, next) {
  if (!req.body.name) {
     const message = "Something went wrong while creating city";
    const error = new AppError(["City name not found in the incoming request"], StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse(error,message));
  }
  next();
}

module.exports = validateCreateResponse;