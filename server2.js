var express = require("express");
var server = express();

var bodyParser = require("body-parser");
var path = require("path");

var fileUpload = require("express-fileupload");

server.use(express.static(path.join(__dirname, "MAI's_web")));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "MAI's_web", "index.html"));
});

var DB = require("nedb-promises");
var mainDB = DB.create(path.join(__dirname, "mainDB.db"));

server.get("/players", async (req, res) => {
  let players = await mainDB.find({});
  res.json({ players: players });
});

/*server.get("/players", async (req, res) => {
  let players = await mainDB.find({});
  console.log("players count:", players.length);
  res.json({ players });
});*/

server.listen(8080);
