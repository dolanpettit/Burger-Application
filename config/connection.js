const mysql = require("mysql");
const pw = require("../pw");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: pw,
  database: "burger_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("There was an error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;
