const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


const API_PORT = 3001;
const app = express();


mongoose.connect("mongodb://localhost:27017/simple", {useNewUrlParser: true});
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

var indexUser = require("./routes/user");
var indexVente = require("./routes/vente");
var indexType = require("./routes/type");
var indexVerre = require("./routes/verre");
var indexParf = require("./routes/parfum");


app.use("/use", indexUser);
app.use("/api", indexVente);
app.use("/type", indexType);
app.use("/verre", indexVerre);
app.use("/parfum", indexParf);
app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));

