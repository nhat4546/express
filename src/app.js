import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.PUBLIC_URL,
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
