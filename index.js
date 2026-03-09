const express = require("express");
const app = express();
const PORT = 3000;

// Use a proper wildcard path
app.get("/", (req, res) => {
  res.send("Hello World from Harness CI/CD");
});
app.get("/:id", (req, res) => {
  res.send("Hello World from Harness CI/CD");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});