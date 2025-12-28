import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

app.get("/", function (req, res) {
  res.send("Lo cc");
});

app.listen(port, () => {
  console.log(`App is running on http://${hostname}:${port}`);
});
