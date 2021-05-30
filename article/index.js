const express = require("express");

const app = express();

app.use(express.json());

const articles = [];

app.get("/api/1.0/articles", (req, res) => {
  res.send(articles);
})

app.post("/api/1.0/articles", (req, res) => {
  // 
})

app.listen(3001, () => {
  console.log("article service is running on port 3001");
});
