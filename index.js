const dotenv = require("dotenv");
const express = require("express");

//* Dotenv
dotenv.config();

//* App
const app = express();
const PORT = 8081; //TODO make as env variable

//TODO Connect to DB

//* Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Public
app.use(express.static("public"));

//* View Engine

//* Routes
app.use(["/", "home"], (req, res) => {
  res.status(200).send("Home");
});

//TODO error 404

//* App Listen

app.listen(PORT, () => {
  console.log("Server:\x1b[92m Online \x1b[0m");
  console.log("Port: " + PORT);
  console.log(`link: http://localhost:${PORT}`);
  console.log("->");
});
