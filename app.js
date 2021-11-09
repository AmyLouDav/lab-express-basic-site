const { response } = require("express");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/public")))

app.all("/", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "home.html"));
});

app.all("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "about.html"));
});

app.all("/works", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "works.html"));
});

app.listen(3001, () => {
  console.log("yay app running!");
});
