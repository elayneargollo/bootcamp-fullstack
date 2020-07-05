const express = require("express");
const accountsModel = require("../models/account.js");

const app = express();

app.get("/accounts", async (req, res) => {
  try {
    const accounts = await accountsModel.find({});
    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/accounts", async (req, res) => {
  try {
    const accounts = new accountsModel(req.body);
    await accounts.save();

    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/accounts/:id", async (request, response) => {
  try {
    const accounts = await accountsModel.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    if (!accounts) {
      return response.status(404).json({ error: "documento nao encontrado" });
    }
    return response.json(accounts);
  } catch (error) {
    return response.status(500).json({ error });
  }
});

app.put("/depositar", async (request, response) => {
  const { agencia, conta, valor } = request.body;

  try {
    const accounts = await accountsModel.findOneAndUpdate(
      { agencia, conta },
      { $inc: { balance: valor } },
      { new: true }
    );

    if (!accounts) {
      return response.status(404).json({ error: "conta nao encontrada" });
    }
    return response.json({ accounts });
  } catch (error) {
    console.log(error);
    res.send(error);
    return response.status(500).json({ error });
  }
});

app.put("/sacar", async (request, response) => {
  const { agencia, conta, valor } = request.body;

  try {
    let accounts = await accountsModel.findOne({ agencia, conta });

    if (accounts && accounts.balance >= valor + 1) {
      accounts = await accountsModel.findOneAndUpdate(
        { agencia, conta },
        { $inc: { balance: valor * -1 - 1 } },
        { new: true }
      );
    } else if (accounts) {
      return response.json({ msg: "saldo insuficiente para este saque" });
    }
    if (!accounts) {
      return response.status(404).json({ error: "conta nao encontrada" });
    }
    return response.json({ saldoAtual: accounts.balance });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

app.get("/consultar", async (request, response) => {
  const { agencia, conta } = request.body;

  try {
    let accounts = await accountsModel.findOne({ agencia, conta });

    if (!accounts) {
      return response.status(404).json({ error: "conta nao encontrada" });
    }

    return response.json({ saldoAtual: accounts.balance });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

app.delete("/deletar/:agencia/:conta", async (request, response) => {
  const { agencia, conta } = request.params;

  try {
    const accounts = await accountsModel.findOneAndDelete({ agencia, conta });

    if (!accounts) {
      return response.status(404).json({ error: "conta nao encontrada" });
    }
    const accountQuantity = await accountsModel.countDocuments({ agencia });
    return response.json({ quantidade: accountQuantity });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

app.post("/transferencia", async (request, response) => {
  const { contaOrigem, contaDestino, valor } = request.body;
  let tarifa = 0;

  try {
    const accountOrigem = await accountsModel.findOne({ conta: contaOrigem });
    const accountDestino = await accountsModel.findOne({ conta: contaDestino });

    console.log(accountOrigem)
    console.log(accountDestino)

    if (accountOrigem.agencia !== accountDestino.agencia) {
      tarifa = 8;
    }

    if (accountOrigem.balance < +valor + tarifa) {
      return response.json({ msg: "saldo insuficiente para transferencia" });
    }

    const account = await accountsModel.findOneAndUpdate(
      { conta: contaOrigem },
      { $inc: { balance: valor * -1 - tarifa } },
      { new: true }
    );

    await accountsModel.findOneAndUpdate(
      { conta: contaDestino },
      { $inc: { balance: +valor } }
    );

    return response.json({ saldoContaOrigem: account.balance });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

app.get("/media/:agencia", async (request, response) => {
  const { agencia } = request.params;

  try {
    const accounts = await accountsModel.aggregate([
      {
        $group: {
          _id: "$agencia",
          media: {
            $avg: "$balance",
          },
        },
      },
    ]);
    const account = accounts.filter((account) => account._id === +agencia);
    return response.json({ media: account[0].media });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

  app.get("menores/:quantidade", async (request, response) => {
    const { quantidade } = request.params;

    try {
      const accounts = await accountsModel
        .find({})
        .sort({ balance: 1 })
        .limit(+quantidade);
      return response.json(accounts);
    } catch (error) {
      return response.status(500).json({ error });
    }
  });
  
  app.get("/maiores/:quantidade", async (request, response) => {
    const { quantidade } = request.params;
    try {
      const accounts = await accountsModel
        .find({})
        .sort({ balance: -1 })
        .limit(+quantidade);
      return response.json(accounts);
    } catch (error) {
      return response.status(500).json({ error });
    }
  });
  

module.exports = app;
