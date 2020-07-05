const express = require("express");
const accountsModel = require("../models/account.js");

const app = express();

/* retorna todas as contas */
app.get("/accounts", async (req, res) => {
  try {
    const accounts = await accountsModel.find({});
    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* criação de uma conta */
app.post("/accounts", async (req, res) => {
  try {
    const accounts = new accountsModel(req.body);
    await accounts.save();

    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* deletar conta */
app.delete("/accounts/:id", async (req, res) => {
  try {
    const accounts = await accountsModel.findOneAndDelete({'_id': req.params.id});
    if (!accounts) {
      res.status(404).send("Documento nao encontrado");
    }
    res.status(200).send("Documento excluido com sucesso !!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
