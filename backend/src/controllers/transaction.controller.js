
import { Transaction } from "../models/transaction.model.js";

// ============================
// CREATE TRANSACTION
// ============================

export const createTransaction =
  async (req, res) => {
    try {
      const {
        title,
        amount,
        type,
        category,
        date,
      } = req.body;

      const transaction =
        await Transaction.create({
          title,
          amount,
          type,
          category,
          date,

          // SAVE USER ID
          user: req.userId,
        });

      res.status(201).json({
        success: true,
        message:
          "Transaction Added Successfully",
        transaction,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Internal Server Error",
      });
    }
  };

// ============================
// GET USER TRANSACTIONS
// ============================

export const getTransactions =
  async (req, res) => {
    try {
      const transactions =
        await Transaction.find({
          user: req.userId,
        })

          .populate(
            "user",
            "name email"
          )

          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        transactions,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Internal Server Error",
      });
    }
  };

// ============================
// GET ALL TRANSACTIONS (ADMIN)
// ============================

export const getAllTransactions =
  async (req, res) => {
    try {
      const transactions =
        await Transaction.find()

          .populate(
            "user",
            "name email profileImage"
          )

          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        transactions,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Internal Server Error",
      });
    }
  };

// ============================
// DELETE TRANSACTION
// ============================

export const deleteTransactions =
  async (req, res) => {
    try {
      const transaction =
        await Transaction.findById(
          req.params.id
        );

      if (!transaction) {
        return res.status(404).json({
          success: false,
          message:
            "Transaction Not Found",
        });
      }

      await transaction.deleteOne();

      res.status(200).json({
        success: true,
        message:
          "Transaction Deleted Successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Internal Server Error",
      });
    }
  };