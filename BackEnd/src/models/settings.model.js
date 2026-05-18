const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
{
  general: {
    key: {
      type: String,
      required: false,
      unique: true
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
      unique: true
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
      unique: true
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
  payments: {
    key: {
      type: String,
      required: false,
      unique: true
    },
    currencySymbol: {
      type: String,
      required: false,
    },
    currencyPosition: {
      type: String,
      required: false,
    },
    thousandSeperator: {
      type: String,
      required: false,
    },
    decimalSeperator: {
      type: String,
      required: false,
    },
    numberOfDecimals: {
      type: String,
      required: false,
    },
    paymentPage: {
      type: String,
      required: false,      
    },
    paymentPageFooter: {
      type: String,
      required: false,      
    },
    bank: {
      type: String,
      required: false,
    },
    genericPayment: {
      type: String,
      required: false,
    },
    discount: {
      type: String,
      required: false,
    },
    paid: {
      type: String,
      required: false,
    }
  },
  tax: {
    key: {
      type: String,
      required: false,
      unique: true
    },  
    price: {
      type: String,
      required: false
    },
    percentage: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false      
    },
  },
  translate: {
    key: {
      type: String,
      required: false,
      unique: true
    },
    quoteLabel: {
      type: String,
      required: false,      
    },
    qutoeLabelPlural: {
      type: String,
      required: false,
    },
    invoiceLabel: {
      type: String,
      required: false,
    },
    invoiceLabelPlural: {
      type: String,
      required: false,
    },
    hrsQty: {
      type: String,
      required: false,
    },
    service: {
      type: String,
      required: false,
    },
    ratePrice: {
      type: String,
      required: false,
    },
    adjust: {
      type: String,
      required: false,
    },
    subTotal: {
      type: String,
      required: false,
    },
    discount: {
      type: String,
      required: false,
    },
    total: {
      type: String,
      required: false,
    },
    totalDue: {
      type: String,
      required: false,
    },    
  }  
  },  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("settings", settingsSchema);