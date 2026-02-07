// const { error } = require("./error-response");
// const { success } = require("./success-response");

module.exports={
  ErrorResponse:(err) => ({
    success: false,
    message: "something went wrong",
    data: {},
    error: {
      statusCode: err.statusCode,
      explanation: err.explanation || err.message
    }
  }),
  SuccessResponse:(data) => ({
    success: true,
    message: "successfully completed the request",
    data,
    error: {}
  }),
}