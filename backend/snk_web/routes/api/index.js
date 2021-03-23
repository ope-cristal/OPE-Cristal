var express = require("express");
var router = express.Router();

const loginRoutes = require("./login");
const clienteRoutes = require("./cliente");
const produtoRoutes = require("./produto");
const carrinhoRoutes = require("./carrinho");

router.get("/", function (req, res, next) {
  res.json({ version: "v1.0.0" });
});

// Unauthenticated endpoints
router.use("/login", loginRoutes);

// Authenticated endpoints
router.use("/cliente", clienteRoutes);
router.use("/produto", produtoRoutes);
router.use("/carrinho", carrinhoRoutes);

module.exports = router;
