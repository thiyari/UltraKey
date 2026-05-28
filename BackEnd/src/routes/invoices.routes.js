const express = require("express");

const router = express.Router();

const invoicesController = require("../controllers/invoices.controller");

router.post("/", invoicesController.create);
router.get("/", invoicesController.getInvoices);
router.get("/latest-invoice-number", invoicesController.getLatestInvoiceNumber);
router.get("/:id", invoicesController.getById);
router.put("/:id", invoicesController.update);
router.delete("/:id", invoicesController.delete);

module.exports = router;