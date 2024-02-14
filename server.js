const mongoose = require("mongoose");
const db = require('./data/db');

const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 10 || (major === 10 && minor <= 0)) {
  console.log(
    "Please go to nodejs.org and download version 10 or greater. 👌\n "
  );
  process.exit();
}
require("dotenv").config({ path: ".variables.env" });

db.run();

const glob = require("glob");
const path = require("path");

glob.sync("./models/*.js").forEach(function (file) {
  require(path.resolve(file));
});

// Start our app!
const app = require("./app");
app.set("port", process.env.PORT || 80);

const server = app.listen(app.get("port"), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});
