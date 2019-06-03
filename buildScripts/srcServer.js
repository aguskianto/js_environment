// es5
// var express = require("express");
// var path = require("path");
// var open = require("open");

// var port = 3000;
// var app = express();

// es6
import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath
  })
);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
