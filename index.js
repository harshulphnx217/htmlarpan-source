const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "static")));

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.listen(5000, function (err) {
  if (err) {
    return console.log("An error occurred.");
  }
  console.log("The server is running on port 5000");
});
