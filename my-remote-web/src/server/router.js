const express = require('express');
const router = express.Router();
const { MongoClient} = require('mongodb');

const mongoUrl = "mongodb://localhost:27017";
const dbName = "my-remote-web";
const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

/**
 * Get team member info
 */
router.get('/bio/team-member', async (req, res) => {
  try {
    await client.connect();
    console.log("Connect to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection('Bio');
    const teamMembers = await collection.find({}).toArray();
    
    const transformedTeamMembers = teamMembers.map(doc => {
      return Object.keys(doc)
        .filter(key => key !== '_id') // 过滤掉 _id 键
        .map(key => doc[key]); // 获取所有成员对象
    }).flat(); // 因为 map 会返回一个二维数组，我们使用 flat 来将它降维成一维数组

    res.json(transformedTeamMembers);

  } catch (e) {
    console.error('Failed to fetch team member info', e);
    res.status(500).send('Error fetching team member info');
  } finally {
    await client.close();
  }
})

module.exports = router;