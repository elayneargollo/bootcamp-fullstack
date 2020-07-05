const mongoose = require("mongoose");

const accountsSchema = mongoose.Schema({
  agencia: {
    type: Number,
    require: true, // requisito obrigatorio
  },

  conta: {
    type: Number,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  balance: {
    type: Number,
    require: true,

    validate(balance) {
      if (balance < 0) throw new Error("So é admitido valores acima de 0");
    },
  },
});

const accountsModel = mongoose.model("accounts", accountsSchema);

module.exports = accountsModel;
