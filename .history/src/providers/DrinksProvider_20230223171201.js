var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ejstruppiza"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
