const express = require("express");

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("home", {
    title: "Another Title",
    users: [{ name: "Arthur" }, { name: "Kento" }, { name: "Nicolo" }],
  });
});

server.listen(3000, () => console.log("server running on port 3000"));
