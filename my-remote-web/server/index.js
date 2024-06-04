const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const router = require('./router');
const https = require('https');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

// 读取证书文件
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    app.locals.db = client.db("my-remote-web");

    const port = 5566;
    // 使用HTTPS服务器
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(port, () => {
      console.log(`Server is running on https://localhost:${port}`);
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