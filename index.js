const express = require("express");
const app = express();

const db = require("./models/index");
const { user } = db;
db.sequelize.sync();

const { PORT } = process.env;
const port = PORT || process.env.PORT;

app.use(express.json());

app.get("/user", async (req, res) => {
  const allUser = await user.findAll().catch((err) => {
    console.log(err.message);
    res.send("error");
  });
  res.json(allUser);
});

app.post("/user", async (req, res) => {
  data = req.body.data;
  info = await user.create({
    id: user.find,
    age: data.age,
    position: data.position,
    tid: data.tid,
  });
  if (!info) {
    res.sendStatus(500);
  } else {
    res.status(200).json(info);
  }
});

app.listen(4001, () => {
  console.log(`Server is running on port 4001`);
});
