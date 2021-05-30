const express = require("express");

const app = express();

app.use(express.json());

const users = [];
for(let i = 1; i <= 5; i++) {
  const user = {
    id: i,
    username: `user${i}`,
    email: `user${i}@mail.com`,
    password: 'P4ssword'
  }
  users.push(user);
}

app.post("/api/1.0/auth", (req, res) => {
  //
})


app.listen(3000, () => {
  console.log("auth server is running on port 3000");
});
