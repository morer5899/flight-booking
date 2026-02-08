// const { where } = require("sequelize");
// const { Logger } = require("../config");
const { Op } = require("sequelize");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

class Crudrepository {

  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const res = await this.model.create(data);
    return res;
  }

  async destroy(data) {
    let res = await this.model.destroy({
      where: {
        id: data
      }
    })
    if (!res) {
      throw new AppError("not able to find resource", StatusCodes.NOT_FOUND);
    }
    return res;
  }

  async get(data) {
    let res = await this.model.findByPk(data);
    if (!res) {
      throw new AppError("not able to find resource", StatusCodes.NOT_FOUND);
    }
    return res;
  }

  async getByName(name) {
    const cities = await this.model.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`
        }
      }
    });
    if (!cities || cities.length === 0) {
      throw new AppError(
        "No cities found matching the search",
        StatusCodes.NOT_FOUND
      );
    }
    return cities;
  }

  async getAll() {
    let res = await this.model.findAll();

    return res;
  }

  async update(id, data) {
    let res = await this.model.update(data, {
      where: {
        id: id
      }
    });

    if (res[0] == 0) {
      throw new AppError("not able to find resource", StatusCodes.NOT_FOUND);
    }
    return res;
  }
}

module.exports = Crudrepository;