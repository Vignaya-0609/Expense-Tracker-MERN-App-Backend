import mongoose from "mongoose";

const connection=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(conn.connection.host);
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

export default connection;