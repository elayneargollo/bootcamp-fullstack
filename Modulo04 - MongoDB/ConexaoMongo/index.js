const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://dbBootcamp:dbBootcamp@cluster0.loteo.mongodb.net/<dbname>?retryWrites=true&w=majority"

/* construtor */
const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})


/* estabelece conexao */
client.connect(async (err) => {
   
    const colletion = client.db('grades').collection('student');

    const documents =  await colletion.find({subject:"Historia"}).toArray();
    console.log(documents);

    const databaselist = await client.db().admin().listDatabases();
    console.log('Databases: ');

    databaselist.databases.forEach((db) =>{
        console.log(` - ${db.name}`);
    })
 
    client.close();
});
