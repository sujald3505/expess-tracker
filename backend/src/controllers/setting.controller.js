import { Setting } from "../models/setting.model.js";

// ============================
// GET SETTINGS
// ============================

export const getSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    // CREATE DEFAULT SETTINGS
    if (!settings) {
      settings = await Setting.create({
        currency: "INR",

        theme: "light",
      });
    }

    res.status(200).json({
      success: true,

      settings,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// UPDATE SETTINGS
// ============================

export const updateSettings = async (req, res) => {
  try {
    const { currency, theme } = req.body;

    let settings = await Setting.findOne();

    // CREATE SETTINGS
    if (!settings) {
      settings = await Setting.create({
        currency,

        theme,
      });
    } else {
      // UPDATE
      settings.currency = currency;

      settings.theme = theme;

      await settings.save();
    }

    res.status(200).json({
      success: true,

      settings,

      message: "Settings Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};
