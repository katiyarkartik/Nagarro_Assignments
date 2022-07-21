const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
//app.post
mongoose.connect(
  "mongodb+srv://admin:kartik0306@cluster0.2rkscpx.mongodb.net/jokesdb"
);

const jokesSchema = {
  joke: String,
};
const jokemodel = mongoose.model("joke", jokesSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/", (req, res) => {
  let body = req.body;
  let { joke } = body;
  const newjoke = new jokemodel();
  newjoke.joke = joke;
  newjoke.save();
});

app.listen(3000, function () {
  console.log("running on port 3000...");
});
