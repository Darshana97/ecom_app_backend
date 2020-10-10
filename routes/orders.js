// import express from "express";
const express = require("express");

// import { Router } from "express";
const router = express.Router();

// import database from "../config/helpers";
const { database } = require("../config/helpers");

// const router = Router();

router.get("/", (req, res) => {
  database
    .table("orders_details as od")
    .join([
      {
        table: "orders as o",
        on: "o.id = od.order_id",
      },
      {
        table: "products as p",
        on: "p.id = od.product_id",
      },
      {
        table: "users as u",
        on: "u.id = o.user_id",
      },
    ])
    .withFields([
      "o.id",
      "p.title as name",
      "p.description",
      "p.price",
      "u.username",
    ])
    .getAll()
    .then((orders) => {
      if (orders.length > 0) {
        res.status(200).json(orders);
      } else {
        res.json({ message: "No orders found" });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
