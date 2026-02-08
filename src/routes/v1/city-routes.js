const express=require("express");
const { CityController } = require("../../controllers");
const {CityMiddleware}=require("../../middlewares")
const router=express.Router();


router.post("/",CityMiddleware,CityController.createCity)
router.get("/all",CityController.getCities)

router.get("/",CityController.getCity)

router.delete("/:id",CityController.destroyCity)

router.patch("/:id",CityMiddleware,CityController.updateCity);

module.exports=router;