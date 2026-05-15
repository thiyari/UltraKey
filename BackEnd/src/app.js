const express = require("express");

const settingsRoutes = require("./routes/settings.routes");

const app = express();

app.use(express.json());

app.use("/api/settings", settingsRoutes);

module.exports = app;