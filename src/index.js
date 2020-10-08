import express from "express";
import cors from "cors";

const app = express();


app.use(cors({
    origin:"*",
    methods:['GET','POST','PATCH','DELETE','PUT'],
    allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'

}));

const PORT = process.env.P | 3000;

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
