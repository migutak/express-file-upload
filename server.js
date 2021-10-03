const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

const allowedOrigins = [
  'http://127.0.0.1:4200',
  'http://localhost:4200',
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://ecollectweb.co-opbank.co.ke:8002',
  'http://ecollecttst.co-opbank.co.ke:8002'
];

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
