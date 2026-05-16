const express = require("express");
const cors = require('cors');
const settingsRoutes = require("./routes/settings.routes");

const app = express();

app.use(express.json());

app.use(cors(
    {   origin: ['http://localhost:5173'],
        methods: ['POST','GET','PUT','DELETE','PATCH','OPTIONS'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,}
));


app.use("/api/settings", settingsRoutes);

module.exports = app;
