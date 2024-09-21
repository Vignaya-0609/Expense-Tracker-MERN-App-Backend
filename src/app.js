import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./config/db.js";
import router from "./routes/Routes.js";

dotenv.config();
connection();
// console.log(process.env.MONGO_URL);

const PORT=5000;
const app=express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/transactionApi/",router);

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})

app.listen(PORT,()=>console.log("Started and listen to the port ",PORT))