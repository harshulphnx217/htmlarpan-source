const express = require("express");
const path = require("path");
const app = express();
const config = require("./config/config");

app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const chitters = [
    {
      _id: 123,
      chitter: "Attending workshop :)",
      comments: [
        {
          _id: 12345678,
          comment: "first comment!",
          username: "arpancodes"
        }
      ],
      username: "arpancodes",
    },
    {
      _id: 124,
      chitter: "Lorem ipsum:)",
      comments: [],
      username: "arpancodes1",
    },
    {
      _id: 125,
      chitter: "Hello world :)",
      comments: [],
      username: "arpancodes3",
    },
  ];
  res.render("index.ejs", { title: "Chitter | A twitter clone", chitters });
});

app.listen(config.PORT, function (err) {
  if (err) {
    return console.log("An error occurred.");
  }
  console.log("The server is running on port: " + config.PORT);
});
