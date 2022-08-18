const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/itemRoutes");
var cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9pclo.mongodb.net/mptfilTask?retryWrites=true&w=majority`;
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(itemRouter);

app.listen(port, () => {
    console.log("Server is running...");
});