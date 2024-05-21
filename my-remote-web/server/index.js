const express = require('express');
const app = express();
const router = require("./router");
const cors = require("cors");
const { MongoClient} = require('mongodb');

app.use(cors());
app.use(express.json());
app.use("/api", router);
const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

async function main() {
  try {
      await client.connect();
      console.log("Connected to MongoDB");

      app.locals.db = client.db("my-remote-web");

      app.use(express.json());
      app.use('/api', router);

      app.listen(5566, () => {
          console.log('Server is running on http://0.0.0.0:5566');
      });
  } catch (e) {
      console.error("Failed to connect to MongoDB", e);
      await client.close();
  }
}

main();

process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});