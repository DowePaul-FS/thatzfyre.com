const express = require("express");
const tagsCtrl = express.Router();

// findAll
tagsCtrl.get("/", async (req, res) => {
    res.send('Tags#Index')
});

tagsCtrl.post("/", async (req, res) => {
    res.send('Tags#Create')
});

tagsCtrl.get("/:id", async (req, res) => {
    res.send('Tags#Show')
});

tagsCtrl.post("/:id", async (req, res) => {
    res.send('Tags#Update')
});

tagsCtrl.delete("/", async (req, res) => {
    res.send('Tags#Delete')
});



module.exports = tagsCtrl;