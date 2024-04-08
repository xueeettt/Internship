const express = require('express');
const app = express();
const router = require("./router");
const cors = require("cors");

const { MongoClient } = require('mongodb');

const mongoUrl = "mongodb://localhost:27017/my-remote-web";
const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

async function connectMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Failed to connect to MongoDB', e);
  }
}

connectMongo();

app.use(cors());
app.use("/api", router);

app.listen(5566, () => {
  console.log("Server is running on http://localhost:5566");
});