const { error } = require("./error-response");
const { success } = require("./success-response");

module.exports={
  ErrorResponse:error,
  SuccessResponse:success
}