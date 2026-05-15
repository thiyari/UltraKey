const express = require("express");

const router = express.Router();

const settingsController = require("../controllers/settings.controller");

router.post("/", settingsController.create);

router.get("/", settingsController.getAll);

router.get("/:id", settingsController.getById);

router.put("/:id", settingsController.update);

router.delete("/:id", settingsController.delete);

module.exports = router;