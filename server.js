const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// CURD - Create, Read, Update, Delete
//  Create - POST
//  Read - GET
//  Update - PUT/PATCH
//  Delete - DELETE

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello API!");
});

app.post("/api", (req, res) => {
    // store the name in the database
  console.log(req.body.name);
  return res.status(200).json({
    message: "Hello API!",
    name: req.body.name,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
