const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
{
  general: {
    key: {
      type: String,
      required: false,
    },
    yearStart: {
      type: String,
      required: false,
    },

    yearEnd: {
      type: String,
      required: false,
    },

    lineItems: [{
      qty: {
        type: Number,
        required: false,
      },
      title: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: false,
      },
      description: {
        type: String,
        required: false,
      }
    }],
  },
  business: {
    key: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    info: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    }
  },
  invoices: {
    key: {
      type: String,
      required: false,
    },
    prefix: {
      type: String,
      required: false,
    },
    suffix: {
      type: String,
      required: false,
    },
    autoIncrement: {
      type: String,
      required: false,
    },
    nextNumber: {
      type: String,
      required: false,
    },
    dueDate: {
      type: String,
      required: false,
    },
    hideAdjustField: {
      type: String,
      required: false,
    },
    termsAndConditions: {
      type: String,
      required: false,
    },
    footer: {
      type: String,
      required: false,
    },
    notices: [{
      type: String,
      required: false,
    }],
    template: {
      type: String,
      required: false,
    },
    customCSS: {
      type: String,
      required: false,
    },
    toAddress: {
      type: String,
      required: false,
    }
  },      
  },  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("settings", settingsSchema);