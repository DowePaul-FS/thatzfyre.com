const express = require("express");
const popularlistCtrl = express.Router();
const { PopularList, Category, Product } = require("../models")

// findAll
popularlistCtrl.get("/", async (req, res) => {
    const popular = await PopularList.findAll({
        include: [Category, Product],
    });
    res.json(popular);
    // res.send('Products#Index')
});

popularlistCtrl.post("/", async (req, res) => {
    res.send('Products#Create')
});

popularlistCtrl.get("/:id", async (req, res) => {
    const popular = await PopularList.findByPk((req.params.id), {
        include: [Category, Product],
    })
    res.json(popular);
});

popularlistCtrl.post("/:id", async (req, res) => {
    res.send('Products#Update')
});

popularlistCtrl.delete("/", async (req, res) => {
    res.send('Products#Delete')
});



module.exports = popularlistCtrl;