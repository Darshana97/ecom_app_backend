import express from "express";
import { Router } from "express";
// import database from "../config/helpers";
const { database } = require("../config/helpers");

const router = Router();

router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

module.exports = router;
