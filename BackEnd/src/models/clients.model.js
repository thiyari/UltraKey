const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema(
  {
    businessOrClientName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    }, 
    username: {
        type: String,
        required: false,
    }, 
    password: {
        type: String,
        required: false,
    }, 
    address: {
        type: String,
        required: false,
    },
    extraInfo: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    }
  },  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("clients", clientsSchema);