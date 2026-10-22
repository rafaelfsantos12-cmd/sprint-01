import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor em http://localhost:${port}`);
});

app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1 });
});

app.get("/sobre", (req, res) => {
    res.send("Mensageiro local - Criado no SENAI");
});

app.listen(port, () => console.log(`Servidor em http://localhost:${port}`));