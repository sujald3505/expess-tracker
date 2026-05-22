import { Transaction } from "../models/transaction.model.js";

// ============================
// USER SUMMARY REPORT
// ============================

export const getSummaryReport =
  async (req, res) => {

    try {

      const transactions =
        await Transaction.find({
          user: req.user.userId,
        });

      let totalIncome = 0;

      let totalExpense = 0;

      transactions.forEach(
        (item) => {

          if (
            item.type === "income"
          ) {

            totalIncome +=
              item.amount;

          } else {

            totalExpense +=
              item.amount;
          }
        }
      );

      const balance =
        totalIncome -
        totalExpense;

      res.status(200).json({
        success: true,

        totalIncome,

        totalExpense,

        balance,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// ============================
// ADMIN ANALYTICS
// ============================

export const getUserAnalytics =
  async (req, res) => {

    try {

      const analytics =
        await Transaction.aggregate([

          {
            $group: {

              _id: "$user",

              totalIncome: {
                $sum: {
                  $cond: [
                    {
                      $eq: [
                        "$type",
                        "income",
                      ],
                    },
                    "$amount",
                    0,
                  ],
                },
              },

              totalExpense: {
                $sum: {
                  $cond: [
                    {
                      $eq: [
                        "$type",
                        "expense",
                      ],
                    },
                    "$amount",
                    0,
                  ],
                },
              },
            },
          },

          {
            $lookup: {
              from: "users",

              localField: "_id",

              foreignField: "_id",

              as: "user",
            },
          },

          {
            $unwind: "$user",
          },

          {
            $project: {

              name:
                "$user.name",

              email:
                "$user.email",

              totalIncome: 1,

              totalExpense: 1,

              balance: {
                $subtract: [
                  "$totalIncome",
                  "$totalExpense",
                ],
              },
            },
          },
        ]);

      res.status(200).json({
        success: true,

        analytics,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message ||
          "Internal Server Error",
      });
    }
  };