// const { where } = require("sequelize");
// const { Logger } = require("../config");

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
    return res;
  }

  async get(data) {
    let res = await this.model.findByPk(data);
    return res;
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
    return res;
  }
}

module.exports = Crudrepository;