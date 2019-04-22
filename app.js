const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

app.use(express.static("public"));
// connect to remote database
mongoose
  .connect(keys.MongoURI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log();
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/about", (req, res) => {
  res.render("/about");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
