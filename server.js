const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 4005;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
