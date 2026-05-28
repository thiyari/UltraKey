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

  async getInvoices(req, res) {
  // controllers/invoiceController.js

  const Invoice = require("../models/invoices.model");

    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const skip = (page - 1) * limit;

      const invoices = await Invoice.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const total = await Invoice.countDocuments();

      res.json({
        data: invoices,
        total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    } catch (error) {
      res.status(500).json({
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