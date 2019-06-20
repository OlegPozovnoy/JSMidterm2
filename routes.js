// Our Express app module
const express = require("express");
const app = express();

// Importing the pageRoutes
const resourcesRoutes = require("./routes/resources");

// Our home page
app.get("/home", (req, res) => {
  res.render("pages/home");
});

// Exporting the changes
module.exports = app;
