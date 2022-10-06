const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://adlascio:mongo@cluster0.ydeuggz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/students-without-github", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .aggregate([
      {
        $match: {
          github: null,
        },
      },
      {
        $project: {
          id: 1,
          name: 1,
          email: 1,
          class_id: 1,
        },
      },
    ])
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/students-per-class", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .aggregate([
      {
        $match: {
          class_id: 1,
        },
      },
      {
        $project: {
          id: 1,
          name: 1,
        },
      },
      {
        $sort: {
          name: 1,
        },
      },
    ])
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/students-first-3", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .aggregate([
      {
        $match: {
          class_id: {
            $in: [1, 2, 3],
          },
        },
      },
      {
        $count: "students",
      },
    ])
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/students-without-email-and-phone", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .find({
      email: null,
      phone: null,
    })
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/students-without-gmail-and-phone", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .find({
      email: {
        $not: {
          $regex: /gmail.com/,
        },
      },
      phone: null,
    })
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/students-enrolled", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .aggregate([
      {
        $match: {
          end_date: null,
        },
      },
      {
        $project: {
          id: 1,
          name: 1,
          class_id: 1,
        },
      },
      {
        $sort: {
          class_id: 1,
        },
      },
    ])
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/students-graduated-without-github", (req, res) => {
  const collection = client.db("students-classes").collection("students");
  // perform actions on the collection object
  collection
    .aggregate([
      {
        $match: {
          end_date: {
            $ne: null,
          },
          github: null,
        },
      },
      {
        $project: {
          email: 1,
          name: 1,
          phone: 1,
        },
      },
    ])
    .toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(docs);
      }
    });

  client.close();
});

app.get("/classes", (req, res) => {
  const collection = client.db("students-classes").collection("classes");
  // perform actions on the collection object
  client.close();
});

app.listen(8080, () => console.log("server running 8080"));
