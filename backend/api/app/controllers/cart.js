const express = require("express");
const cartCtrl = express.Router();

// findAll
cartCtrl.get("/", async (req, res) => {
    res.send('Cart#Index')
});

cartCtrl.post("/", async (req, res) => {
    res.send('Cart#Create')
});

cartCtrl.get("/:id", async (req, res) => {
    res.send('Cart#Show')
});

cartCtrl.post("/:id", async (req, res) => {
    res.send('Cart#Update')
});

cartCtrl.delete("/", async (req, res) => {
    res.send('Cart#Delete')
});



module.exports = cartCtrl;