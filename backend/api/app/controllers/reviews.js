const express = require("express");
const reviewsCtrl = express.Router();

// findAll
reviewsCtrl.get("/", async (req, res) => {
    res.send('Reviews#Index')
});

reviewsCtrl.post("/", async (req, res) => {
    res.send('Reviews#Create')
});

reviewsCtrl.get("/:id", async (req, res) => {
    res.send('Reviews#Show')
});

reviewsCtrl.post("/:id", async (req, res) => {
    res.send('Reviews#Update')
});

reviewsCtrl.delete("/", async (req, res) => {
    res.send('Reviews#Delete')
});



module.exports = reviewsCtrl;