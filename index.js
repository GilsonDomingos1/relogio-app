const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const agora = new Date();
  const hora = agora.toLocaleTimeString("pt-PT", { hour12: false });
  res.send(`<h1>🕒 Hora atual: ${hora}</h1>`);
});

app.listen(PORT, () => {
  console.log(`⏰ Servidor rodando na porta ${PORT}`);
});
