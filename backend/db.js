import pg from "pg";

async function test() {
  try {
    const db = await init();
    await db.connect();
    const sql = "SELECT * FROM pedidos WHERE id_cliente = 2";

    const results = await db.query(sql);
    await db.end();
    console.log(results.rows);
  } catch (err) {
    console.log(err);
  }
}

function init() {
  const connectionString = process.env.DB_URI;
  const db = new pg.Client({ connectionString });
  return db;
}
export default init;
