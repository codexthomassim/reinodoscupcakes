import "dotenv/config";
import express from "express";
import createDb from "./db.js";

const app = express();
const PORT = 3001;

// Função para conectar ao banco
async function getPedidos() {
  const db = createDb();
  console.log(db);
  await db.connect();
  const result = await db.query("SELECT * FROM pedidos");
  await db.end();
  return result.rows;
}

// Rota que retorna todos os pedidos
app.get("/pedidos", async (req, res) => {
  try {
    const pedidos = await getPedidos();
    res.json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar pedidos" });
  }
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
