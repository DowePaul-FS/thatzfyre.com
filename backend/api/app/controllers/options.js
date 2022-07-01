const express = require("express");
const optionsCtrl = express.Router();

// findAll
optionsCtrl.get("/", async (req, res) => {
    res.send('Options#Index')
});

optionsCtrl.post("/", async (req, res) => {
    res.send('Options#Create')
});

optionsCtrl.get("/:id", async (req, res) => {
    res.send('Options#Show')
});

optionsCtrl.post("/:id", async (req, res) => {
    res.send('Options#Update')
});

optionsCtrl.delete("/", async (req, res) => {
    res.send('Options#Delete')
});



module.exports = optionsCtrl;