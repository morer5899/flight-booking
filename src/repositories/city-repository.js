const Crudrepository=require("./crud-repositories.js");
const {City}=require("../models")
class CityRepository extends Crudrepository{
  constructor(){
    super(City)
  }
}

module.exports=CityRepository;