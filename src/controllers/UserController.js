import User from "../models/UserModel.js";

// create users
const createUser=async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        const user=await User.create({username,email,password});
        res.status(201).json({message:"User created successfully"});
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
}

// get users
const usersList=async(req,res)=>{
    try{
        const users=await User.find({});
        res.status(200).json(users);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
}
export {createUser,usersList}