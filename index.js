const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = 5001;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

http.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
