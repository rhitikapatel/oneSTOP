import express from "express" 
import mongoose from "mongoose"
import dotenv from "dotenv"
import CompanyRoute from "./routes/company.route.js";
import cors from "cors";



const app = express()
app.use(cors());

dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//conncet to mongoDB
try{
  await mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

  });
  console.log("connected to mongoose");

}catch(error){
  console.log("Error :",error)

}
app.use("/company",CompanyRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
