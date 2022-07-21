var express = require("express");
var app = express();
var connection = require("./database");

app.get("/", function (req, res) {
    let sql="SELECT * FROM STUDENT_INFO";
});
app.listen(8000, function () {
  console.log("app running on port 8000...");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("database connected");
     

  });
  let sql="SELECT * FROM STUDENT_INFO";
    connection.query(sql,function(err,results){
    
      console.log(results)

    })
});
