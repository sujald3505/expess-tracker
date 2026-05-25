import { Router } from "express";

import {
  createBudget,
  getBudgets,
  deleteBudget,
} from "../controllers/budget.controller.js";

import { authenticate } from "../middleware/authenticate.js";

const budgetRoute = Router();

// ============================
// CREATE BUDGET
// ============================

budgetRoute.post("/", authenticate, createBudget);

// ============================
// GET BUDGETS
// ============================

budgetRoute.get("/", authenticate, getBudgets);

// ============================
// DELETE BUDGET
// ============================

budgetRoute.delete("/:id", authenticate, deleteBudget);

export default budgetRoute;
