const express = require("express")
const app = express()
const port=900000
const API_NAME = require("./routes/kuchbhi")
app.use("/pages/catalog",API_NAME)

app.listen(port,()=>{console.log("server is starting...")})