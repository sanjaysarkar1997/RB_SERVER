import mongoose from "mongoose"
import { successLog } from "../services/logServices";

require("dotenv").config()


const connectMongoDB = mongoose.connect(
  "mongodb+srv://rbenterprise:XP4BHx3C9akcCgQI@cluster0.jfjzc.mongodb.net/rbenterprise?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: any) => {
    if (err) {
      console.log(err);
    } else {
      successLog("MongoDB Connected");
    }
  }
);


export default connectMongoDB
