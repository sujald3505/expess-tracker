
import { Router } from "express";

import {
  getTransactions,
  createTransaction,
  deleteTransactions,
  getAllTransactions,
} from "../controllers/transaction.controller.js";

import { authenticate } from "../middleware/authenticate.js";

const transactionRoute = Router();

// ============================
// GET USER TRANSACTIONS
// ============================

transactionRoute.get(
  "/",
  authenticate,
  getTransactions
);

// ============================
// GET ALL TRANSACTIONS (ADMIN)
// ============================

transactionRoute.get(
  "/all",
  authenticate,
  getAllTransactions
);

// ============================
// CREATE TRANSACTION
// ============================

transactionRoute.post(
  "/",
  authenticate,
  createTransaction
);

// ============================
// DELETE TRANSACTION
// ============================

transactionRoute.delete(
  "/:id",
  authenticate,
  deleteTransactions
);

export default transactionRoute;