const express = require("express");
const productsCtrl = express.Router();
const { Product, Category } = require("../models")

// findAll
productsCtrl.get("/", async (req, res) => {
    const products = await Product.findAll({
        include: [Category],
    });
    res.json(products);
    // res.send('Products#Index')
});

productsCtrl.post("/", async (req, res) => {
    res.send('Products#Create')
});

productsCtrl.get("/:id", async (req, res) => {
    const products = await Product.findByPk((req.params.id), {
        include: [Category],
    }
    )
    res.json(products)
});

productsCtrl.post("/:id", async (req, res) => {
    res.send('Products#Update')
});

productsCtrl.delete("/", async (req, res) => {
    res.send('Products#Delete')
});



module.exports = productsCtrl;