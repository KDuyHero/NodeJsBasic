import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

// connection.query("SELECT * from `users` ", function (err, results, fields) {
//   let rows = results.map((row) => row);
// });

export default pool;
