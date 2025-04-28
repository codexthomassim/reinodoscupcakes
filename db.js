const mysql = require("mysql2/promise");

async function test() {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "reinodoscupcakes",
      port: "3308",
    });
    const sql = "SELECT * FROM pedidos WHERE id_cliente = 2";

    const [rows, fields] = await db.query(sql);

    console.log(rows);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }
}

test();
