const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({ message: "OK", success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  info
};
