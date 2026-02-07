const Crudrepository=require("./crud-repositories.js");
const {Airplane}=require("../models")
class AirplaneRepository extends Crudrepository{
  constructor(){
    super(Airplane)
  }
}

module.exports=AirplaneRepository;