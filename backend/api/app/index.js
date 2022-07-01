const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const productsCtrl = require("../app/controllers/products");
const popularlistCtrl = require("../app/controllers/popularlist");
const usersCtrl = require("../app/controllers/users");
const categoriesCtrl = require("../app/controllers/categories");
const tagsCtrl = require("../app/controllers/tags");
const tabsCtrl = require("../app/controllers/tabs");
const ratingsCtrl = require("../app/controllers/ratings");
const reviewsCtrl = require("../app/controllers/reviews");
const cartCtrl = require("../app/controllers/cart");
const checkoutCtrl = require("../app/controllers/checkout");
// var session = require('express-session');
app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "twig");
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,OUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credential: true,
    allowCrossDomain: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.use("/products", productsCtrl);
app.use("/popularlist", popularlistCtrl);
app.use("/users", usersCtrl);
app.use("/categories", categoriesCtrl);
app.use("/tags", tagsCtrl);
app.use("/tabs", tabsCtrl);
app.use("/ratings", ratingsCtrl);
app.use("/reviews", reviewsCtrl);
app.use("/cart", cartCtrl);
app.use("/checkout", checkoutCtrl);

// app.get("/*", (request, response, next) => {
// // response.send("home page");
// response.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
// });

module.exports = app;
