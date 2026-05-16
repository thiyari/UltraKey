const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
{
  general: {
    yearStart: {
      type: String,
      required: true,
    },

    yearEnd: {
      type: String,
      required: true,
    },

    lineItems: [{
      qty: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    }],
  },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("settings", settingsSchema);