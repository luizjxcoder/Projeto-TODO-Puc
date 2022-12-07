const express = require("express");
const router = express.Router();

exports.get = (req, res) => {
   const id = req.prams.id;
   console.log("Get");
   res.send(`Ok Getd id${id}`);
};

exports.getAll = (req, res) => {
   console.log("Get All");
   res.send("Ok Get All")

};

exports.add = (req, res) => {
   console.log("Add");
   res.send("Ok Add")

};

exports.update = (req, res) => {
   console.log("Update");
   res.send("Ok Update")

};

exports.delete = (req, res) => {
   console.log("Delete");
   res.send("Ok Delete")
   
};
