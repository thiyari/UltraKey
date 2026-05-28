const invoicesRepository = require("../repositories/invoices.repository");

class InvoicesService {
  async createInvoices(settingsData) {
    return await invoicesRepository.create(settingsData);
  }


  async getInvoicesById(id) {
    const invoices = await invoicesRepository.findById(id);

    if (!invoices) {
      throw new Error("Invoices not found");
    }

    return invoices;
  }

  
  async updateInvoices(id, data) {
    const updatedSettings = await invoicesRepository.update(id, data);

    if (!updatedSettings) {
      throw new Error("Invoices not found");
    }

    return updatedSettings;
  }

  async deleteInvoices(id) {
    const deletedSettings = await invoicesRepository.delete(id);

    if (!deletedSettings) {
      throw new Error("Invoices not found");
    }

    return deletedSettings;
  }
}

module.exports = new InvoicesService();