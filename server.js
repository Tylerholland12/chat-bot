const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const watsonRoutes = require("./routes/api/watson");
// Direct requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log("Server listening on port ", port);
})