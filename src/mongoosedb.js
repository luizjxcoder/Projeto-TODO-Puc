const mongoose = require("mongoose");

const user = "admin";
const pass = "221110";
const database = "todo_sample";
const serverName = "@cluster0.5r7wsch.mongodb.net"; //server é a string copiada do site mongodb, em connect/connect your application



module.exports = {
   init: () => {
      mongoose.set('strictQuery', true);
      mongoose
         .connect(
            `mongodb+srv://${user}:${pass}${ serverName }/?retryWrites=true&w=majority`,
            {
               useNewUrlParser: true,
               useUnifiedTopology: true,
            }
         )
         .then((res) => console.log(`Connection Succeful ${res}`))
         .catch((err) => console.log(`Error iin DB Connection ${err}`));
   },
};
