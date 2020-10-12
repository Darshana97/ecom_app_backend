import express from "express";
import cors from "cors";

const app = express();

import productsRoute from "../routes/products";
import usersRoute from "../routes/orders";

app.use(express.json({ extends: true }));

app.use("/api/products", productsRoute);
app.use("/api/orders", usersRoute);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
  })
);

const PORT = process.env.P | 3000;

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
