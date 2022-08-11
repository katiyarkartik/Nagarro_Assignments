const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

MongoClient.connect(
  //mongodb uri
  { useUnifiedTopology: true }
).then((client) => {
  console.log("Connected to Database");
  const db = client.db("crudApp");
  const contactCollection = db.collection("contacts");
  app.post("/contacts", (req, res) => {
    contactCollection
      .insertOne(req.body)
      .then((result) => {
        res.redirect("/");
      })
      .catch((error) => console.error(error));
  });
  //display all data from mongo
  db.collection("contacts")
    .find()
    .toArray(function (err, results) {
      if (err) throw err;
      console.log(results);
    });
});

app.listen(5000, function () {
  console.log("server is running on port 3000...");
});
