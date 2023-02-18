/ packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/ app configuration /
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.use(jsonParser);
app.use(urlEncodedParser);

/** Methods*/
app.get("/", (req, res, next) => {
  res.send("Welcome to academic rest api");
});

const BreedRoutes = require("./routes/breed.routes");
BreedRoutes.BreedRoutes(app);

const PetRoutes = require("./routes/pet.routes");
PetRoutes.PetRoutes(app);

app.listen(port, () => {
  console.log("Server is running...");
});