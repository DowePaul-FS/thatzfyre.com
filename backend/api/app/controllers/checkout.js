const express = require("express");
const checkoutCtrl = express.Router();

// findAll
checkoutCtrl.get("/", async (req, res) => {
    res.send('Checkout#Index')
});

checkoutCtrl.post("/", async (req, res) => {
    res.send('Checkout#Create')
});

checkoutCtrl.get("/:id", async (req, res) => {
    res.send('Checkout#Show')
});

checkoutCtrl.post("/:id", async (req, res) => {
    res.send('Checkout#Update')
});

checkoutCtrl.delete("/", async (req, res) => {
    res.send('Checkout#Delete')
});



module.exports = checkoutCtrl;