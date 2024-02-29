const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth_route");
const resetRoute = require("./routes/reset_route");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
mongoose.connect(process.env.MONGO_URI);

app.use("/auth", authRoute);
app.use("/reset", resetRoute);

app.get("/test", (req, res, next) => {
  res.json({ message: "hello from server" });
});

mongoose.connection.once("open", () => {
  app.listen(8080, () => {
    console.log("Server started at: https:localhost:8080");
  });
});
