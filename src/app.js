const express = require("express");
const app = express();

//JSON DO BODY-PARSER
app.use(express.json());
app.use(
   express.urlencoded({
      extended: true,
   })
);
const indexRouter = require("./routers/index");
const todoRouter = require("./routers/todo");

app.use("/", indexRouter);
app.use("/todos", todoRouter);


app.get("/", (req, res) => {
   console.log("Hello World");
   res.send("Hello TODO API versão 1.0");
})

module.exports = app; //HACK referencia framework Express e pode ser trocado futuramente