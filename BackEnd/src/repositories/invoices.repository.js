const Invoices = require("../models/invoices.model");

class InvoicesRepository {
  async create(invoicesData) {
    return await Invoices.create(invoicesData);
  }

  async findById(id) {
    return await Invoices.findById(id);
  }
  
  async update(id, data) {
    return await Invoices.findByIdAndUpdate(id, data,                 
        {
            returnDocument: "after"
        });
  }

  async delete(id) {
    return await Invoices.findByIdAndDelete(id);
  }
}

module.exports = new InvoicesRepository();