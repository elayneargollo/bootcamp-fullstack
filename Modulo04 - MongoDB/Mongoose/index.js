// Usando o Node.js 'require()"
const mongoose = require("mongoose");

//Definir conexão
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbBootcamp:dbBootcamp@cluster0.loteo.mongodb.net/<dbname>?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (erro) {
    console.log("Falha ao conectar ao Mongo DB Atlas" + erro);
  }
});

//Definir o modelo através do Schema interface
// Aque se define a estrutura do documento e os tipos de dados
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true, // requisito obrigatorio
  },

  subject: {
    type: String,
    require: true,
  },

  type: {
    type: String,
    require: true,
  },

  value: {
    type: Number,
    require: true,
  },
});

// Acessando um modelo
const student = mongoose.model("student", studentSchema);

// Instanciar e salvar
new student({
  name: "Paulo Assis",
  subject: "Matemática",
  type: "Trabalho pratico",
  value: "23",
})
  .save()
  .then(() => console.log("Documento inserido com sucesso !!"))
  .catch((err) => console.log("Falha ao inserir documento" + err));
