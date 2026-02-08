// server.js
const { PORT } = require('./config/index.js');
const express = require('express');
const apiRoutes = require('./routes/index.js');

const app = express();

console.log("MAIN SERVER FILE LOADED");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', apiRoutes);

app.listen(PORT, async() => {
  console.log(`Server is running on port no ${PORT}`);
  const {City,Airport}=require("./models");
  const bengluru=await City.findByPk(16);
  // console.log(bengluru)
  // const airport=await Airport.create({name:"Kampegoda Airport",code:"BLR",cityId:1});
  // console.log(object)
  // const kmpAirport=await bengluru.createAirport({name:"Hubali Airport",code:"HBL"})
  // console.log(kmpAirport)
  // const airportsInBanglore=await bengluru.getAirports();
  // console.log(airportsInBanglore)
  const hbiairport=await Airport.findByPk(4);
  // console.log(hbiairport)
  // await hbiairport.destroy();
  // console.log(hbiairport)
  await City.destroy({
    where:{
      id:16
    }
  })
  console.log(await bengluru.getAirports())
});
