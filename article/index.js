const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const articles = [];

app.get("/api/1.0/articles", (req, res) => {
  res.send(articles);
})

app.post("/api/1.0/articles", (req, res) => {
  const authorization = req.headers.authorization
  const token = authorization.substring(7);
  const result = jwt.verify(token, "this-is-our-secret")
  const article = {
    ...req.body,
    userId: result.id
  }
  articles.push(article);
  res.send({message: "Success"})
})

app.listen(3001, () => {
  console.log("article service is running on port 3001");
});
