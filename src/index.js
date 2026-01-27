import {PORT} from "./config/index.js";
import express from "express"
import apiRoutes from './routes/index.js'
const app=express();
console.log("MAIN SERVER FILE LOADED");

app.use("/api",apiRoutes);
app.listen(PORT,()=>{
  console.log(`Serever is running on port no ${PORT}`)
})