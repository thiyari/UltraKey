const express = require("express");

const router = express.Router();

const clientsController = require("../controllers/clients.controller");

router.post("/", clientsController.create);
router.get("/", clientsController.getAll);
router.get("/:id", clientsController.getById);
router.put("/:id", clientsController.update);
router.delete("/:id", clientsController.delete);

module.exports = router;