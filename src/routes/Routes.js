import express from "express";
import { createUser, usersList } from "../controllers/UserController.js";
import { createTransaction, deleteTransaction, getSingleTransaction, getTransactions, updateTransaction } from "../controllers/TransactionController.js";

const router=express.Router();

// for users
router.get("/users",usersList);
router.post("/createuser",createUser);

// for notes
router.get("/transactions",getTransactions);
router.post("/createtransaction",createTransaction);
router.get("/transaction/:id",getSingleTransaction);
router.put("/updatetransaction/:id",updateTransaction);
router.delete("/deletetransaction/:id",deleteTransaction);

export default router;