import { StatusCodes } from "http-status-codes";

export const info=(req,res)=>{
  try {
    return res.status(StatusCodes.OK).json({message:"OK",success:true})
  } catch (error) {
    console.log(error)
  }
}