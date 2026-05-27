const mongoose = require("mongoose");

const invoicesSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: false,
    },
    description: {
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
        adjust: {
            type: Number,
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
    subTotal: {
        type: Number,
        required: false
    },
    GST: {
        type: Number,
        required: false
    },
    discount: {
        type: Number,
        required: false    
    },
    paid: {
        type: Number,
        required: false
    },
    totalDue: {
        type: Number,
        required: false
    },
    payments: [{
        date: {
            type: Date,
            required: false,
        },
        amount: {
            type: Number,
            required: false,
        },
        paymentMethod: {
            type: String,
            required: false,
        },
        paymentId: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
        },
        memo: {
            type: String,
            required: false,
        }
    }],
    termsAndConditions: {
        type: String,
        required: false,
    },
    client: {
        address: {
            type: String,
            required: false,
        },
        businessOrClientName: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        extraInfo: {
            type: String,
            required: false,
        },
        firstname: {
            type: String,
            required: false,
        },
        lastname: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: false,
        },
        website: {
            type: String,
            required: false,
        }
    },
    status: {
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
    invoiceNumber: {
        type: String,
        required: false,
    },
    orderNumber: {
        type: String,
        required: false,
    },
    createdDate: {
        type: Date,
        required: false,
    },
    dueDate: {
        type: Date,
        required: false,
    },
    currency: {
        type: String,
        required: false,
    },
    currencySymbol: {
        type: String,
        required: false,
    },
    taxPriceOption: {
        type: String,
        required: false,
    },
    tax: {
        type: String,
        required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("invoices", invoicesSchema);