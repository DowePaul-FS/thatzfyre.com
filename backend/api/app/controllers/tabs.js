const express = require("express");
const tabsCtrl = express.Router();
const { Tab, Category, Product } = require("../models")

// findAll
tabsCtrl.get("/", async (req, res) => {
    const tabs = await Tab.findAll({
        include: [Category, Product],
    });
    res.json(tabs);
    // res.send('Products#Index')
});

tabsCtrl.post("/", async (req, res) => {
    res.send('Tabs#Create')
});

tabsCtrl.get("/:id", async (req, res) => {
    res.send('Tabs#Show')
});

tabsCtrl.post("/:id", async (req, res) => {
    res.send('Tabs#Update')
});

tabsCtrl.delete("/", async (req, res) => {
    res.send('Tabs#Delete')
});



module.exports = tabsCtrl;