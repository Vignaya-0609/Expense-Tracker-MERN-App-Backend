import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  description: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String,
    required:true 
  },
  transactionType: { 
    type: String,
    required:true 
  },
  userId: {
    type: String,
    required: true,
  },
},
{timestamps:true});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
