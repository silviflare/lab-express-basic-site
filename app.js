const express = require("express");
const app = express();
const port = 3000;

// Register public folder and send it to the client

app.use(express.static(__dirname + "/public"));

// Create routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

app.get("/photo-gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
