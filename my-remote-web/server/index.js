const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const router = require('./router');

const app = express();

// 设置CORS配置
const corsOptions = {
  origin: ["http://3.26.0.131:3000", "http://remod.online", "http://localhost:3000"],
  // origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // 处理预检请求


app.use(express.json());
app.use("/api", router);

const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    app.locals.db = client.db("my-remote-web");

    const port = 5566;
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on http://0.0.0.0:${port}`);
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