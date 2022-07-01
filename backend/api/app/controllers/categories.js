const express = require("express");
const categoriesCtrl = express.Router();

// findAll
categoriesCtrl.get("/", async (req, res) => {
    const categories = await User.findAll();
    res.json(categories);
});

categoriesCtrl.post("/", async (req, res) => {
    res.send('Categories#Create')
});

categoriesCtrl.get("/:id", async (req, res) => {
    res.send('Categories#Show')
});

categoriesCtrl.post("/:id", async (req, res) => {
    res.send('Categories#Update')
});

categoriesCtrl.delete("/", async (req, res) => {
    res.send('Categories#Delete')
});



module.exports = categoriesCtrl;