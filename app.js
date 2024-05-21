require("dotenv").config();
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");

// Connect to database
const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri)
    .then(() => { console.log("Connected to database!"); })
    .catch((error) => { console.log(error.message); });

// Create an app
const app = express();
const port = 6771;

app.listen(port, () => {
    console.log(`App http://localhost:${port}`);
});