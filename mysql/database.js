var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  database: "student_db",
  user: "root",
  password: "",
});
module.exports = connection;
