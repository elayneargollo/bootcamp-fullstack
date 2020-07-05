const express = require("express");
const mongoose = require("mongoose");

const accountsRouter = require("./router/accountsRouter.js");

const app = express();

app.use(express.json());
app.use(accountsRouter);

mongoose.connect(
  "mongodb+srv://dbBootcamp:dbBootcamp@cluster0.loteo.mongodb.net/grades?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3000, () => console.log("API iniciada"));
