import Transaction from "../models/TransactionModel.js";

// GET Transactions
const getTransactions = async (req, res) => {
    try {
      const transactions = await Transaction.find({});
      res.status(200).json(transactions);
    } catch (error) {
    //   console.log(error);
      res.status(500).json({ message: error.message });
    }
};
  
// CREATE Transaction
const createTransaction = async (req, res) => {
    const { description,amount,category,transactionType,userId } = req.body;
    try {
      const transaction = await Transaction.create({ description,amount,category,transactionType,userId });
      res.status(201).json({ message: "Transaction created successfully" });
    } catch (error) {
    //   console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };
  
  // GET Single Transaction
  const getSingleTransaction = async (req, res) => {
    const { id } = req.params;
    try {
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        return res.status(404).json({ message: "Transaction Not Found" });
      }
      res.status(200).json({ transaction });
    } catch (error) {
      if (error.name === "CastError" && error.kind === "ObjectId") {
        return res.status(400).json({ message: "Invalid Transaction ID" });
      }
      res.status(500).json({ message: error.message });
    }
  };

// Update Transaction
const updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { description,amount,category,transactionType,userId} = req.body;
    try {
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        return res.status(404).json({ message: "Transaction Not Found" });
      }
  
      transaction.description = description !== undefined ? description : transaction.description;
      transaction.amount = amount !== undefined ? amount : transaction.amount;
      transaction.category=category!==undefined?category:transaction.category;
      transaction.transactionType=transactionType!==undefined?transactionType:transaction.transactionType;
      transaction.userId = userId !== undefined ? userId : transaction.userId;
      const updatedTransaction = await transaction.save();
      res.status(200).json({
        id: updatedTransaction._id,
        description: updatedTransaction.description,
        amount: updatedTransaction.amount,
        category:updatedTransaction.category,
        transactionType:updatedTransaction.transactionType,
        userId: updatedTransaction.userId,
      });
    } catch (error) {
      if (error.name === "CastError" && error.kind === "ObjectId") {
        return res.status(400).json({ message: "Invalid Transaction ID" });
      }
      res.status(500).json({ message: error.message });
    }
  };
  
  // DELETE Transaction
  const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
      const transaction = await Transaction.findByIdAndDelete(id);
      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
      if (error.name === "CastError" && error.kind === "ObjectId") {
        return res.status(400).json({ message: "Invalid Transaction ID" });
      }
      res.status(500).json({ message: error.message });
    }
  };
  
  export { getTransactions, createTransaction,getSingleTransaction, updateTransaction, deleteTransaction };