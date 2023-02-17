import express from "express";
import db from "./config/dbConnect.js";
import jogos from "./models/Jogos.js";

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("conexão com banco feita com sucesso");
});

const app = express();

app.use(express.json());

// const jogos = [
//   { id: 1, titulo: "Zelda" },
//   { id: 2, titulo: "Fifa" },
// ];

app.get("/", (req, res) => {
  res.status(200).send("locadora");
});

app.get("/jogos", (req, res) => {
  jogos.find((err, jogos) => {
    res.status(200).json(jogos);
  });
});

app.post("/jogos", (req, res) => {
  jogos.push(req.body);
  res.status(201).send("jogo cadastrado com sucesso");
});

app.get("/jogos/:id", (req, res) => {
  let index = buscaJogos(req.params.id);
  res.json(jogos[index]);
});

app.put("/jogos/:id", (req, res) => {
  let index = buscaJogos(req.params.id);
  jogos[index].titulo = req.body.titulo;
  res.json(jogos);
});

app.delete("/jogos/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaJogos(id);
  jogos.splice(index, 1);
  res.send(`Jogo ${id} removido com sucesso`);
});

function buscaJogos(id) {
  return jogos.findIndex((jogos) => jogos.id == id);
}

export default app;
