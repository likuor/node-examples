const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://adlascio:mongo@cluster0.ydeuggz.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect(async (err) => {
//   const collection = client.db("sample_mflix").collection("movies");
//   // perform actions on the collection object
//   const movies = await collection.findOne({}).toArray();
//   console.log("movies", movies.length);
//   client.close();
// });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/students", (req, res) => {
  const pool = new Pool({
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  pool
    .query("SELECT * FROM students")
    .then((result) => result.rows)
    .then((students) => res.json(students))
    .catch((err) => console.log("err"))
    .finally(() => pool.end());
});

app.post("/students", (req, res) => {
  const { name, email, phone, github } = req.body;
  const pool = new Pool({
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  pool
    .query(
      "INSERT INTO students (name, email, phone, github) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, github]
    )
    .then((result) => result.rows[0])
    .then((student) => res.send(student))
    .catch((err) => console.log("err", err))
    .finally(() => pool.end());
});

app.listen(8080, () => console.log("server running 8080"));
