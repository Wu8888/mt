var express = require("express");
var app = new express();
app.use(express.static("dist"));
app.listen(12306);