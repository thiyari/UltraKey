const invoicesService = require("../services/invoices.service");

class InvoicesController {
  
  async create(req, res) {
    
        try{
            const invoices = await invoicesService.createInvoices(req.body);
              res.status(201).json({
              success: true,
              data: invoices,
            });
          } catch (error) {
            res.status(500).json({
              success: false,
              message: error.message,
            });
          }
  }

  async getAll(req, res) {
    try {
      const invoices = await invoicesService.getInvoices();

      res.status(200).json({
        success: true,
        data: invoices,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getById(req, res) {
    try {
      const invoices = await invoicesService.getInvoicesById(req.params.id);

      res.status(200).json({
        success: true,
        data: invoices,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const updatedInvoices = await invoicesService.updateInvoices(
        req.params.id,
        req.body
      );

      res.status(200).json({
        success: true,
        data: updatedInvoices,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      await invoicesService.deleteInvoices(req.params.id);

      res.status(200).json({
        success: true,
        message: "Invoices deleted successfully",
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new InvoicesController();