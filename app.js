const express = require("express");
const app = express();
const firebase = require("firebase-admin");

const user = require("./config/config");
const cors = require("cors");
app.use(express.json());
app.use(cors());

// this portion addproduct
app.post("/addproduct", async (req, res) => {
  const data = req.body;

  await user.add(data);
  console.log("khan");
  res.json(data);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("PORT ARE RUNNING ", PORT);
});
