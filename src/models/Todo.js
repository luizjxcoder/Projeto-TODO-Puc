const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   finished: {
      type: Booloean,
      required: true,
   },
   date: {
      type: Date,
      required: Date.now(),
   },
});

module.exports = Todo = mongoose.model("todos", todoSchema);