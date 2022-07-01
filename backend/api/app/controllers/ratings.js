const express = require("express");
const ratingsCtrl = express.Router();

// findAll
ratingsCtrl.get("/", async (req, res) => {
    res.send('Ratings#Index')
});

ratingsCtrl.post("/", async (req, res) => {
    res.send('Ratings#Create')
});

ratingsCtrl.get("/:id", async (req, res) => {
    res.send('Ratings#Show')
});

ratingsCtrl.post("/:id", async (req, res) => {
    res.send('Ratings#Update')
});

ratingsCtrl.delete("/", async (req, res) => {
    res.send('Ratings#Delete')
});



module.exports = ratingsCtrl;