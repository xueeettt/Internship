const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "research.remod@gmail.com",
    pass: "euml qgef vapb bvpd"
  }
});

/**
 * Send email
 */
router.post('/contact/send-email', async (req, res) => {

  const { email, message, phone, firstName, lastName } = req.body;

  try {
    let info = await transporter.sendMail({
      from: email,
      replyTo: email,
      to: 'research.remod@gmail.com',
      subject: `Remote-Web-Request from ${firstName} ${lastName}`,
      text: `${message}\n${phone}\n${firstName} ${lastName}`,
    });
    console.log(email);
    console.log(firstName);
    console.log(lastName);
    console.log('Message sent: %s', info.messageId);
    res.send({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error occurred: ' + error.message);
    res.status(500).send({ success: false, error: error.message });
  }
});

/**
 * Get team member info
 */
router.get('/bio/team-member', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const collection = db.collection('Bio');
    const teamMembers = await collection.find({}).toArray();
    // console.log(teamMembers);
    const transformedTeamMembers = teamMembers.map(doc => {
      return Object.keys(doc)
        .filter(key => key !== '_id') // 过滤掉 _id 键
        .map(key => doc[key]); // 获取所有成员对象
    }).flat(); // 因为 map 会返回一个二维数组，我们使用 flat 来将它降维成一维数组

    res.json(transformedTeamMembers);

  } catch (e) {
    console.error('Failed to fetch team member info', e.response.data);
    res.status(500).send('Error fetching team member info');
}
});

/**
 * Get research info
 */
router.get('/research/content', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const collection = db.collection('Research');
    const researches = await collection.find({}).toArray();
    
    const transformedResearches = researches.map(doc => {
      return Object.keys(doc)
        .filter(key => key !== '_id')
        .map(key => doc[key]);
    }).flat(); 

    res.json(transformedResearches);

  } catch (e) {
    console.error('Failed to fetch research info', e.response.data);
    res.status(500).send('Error fetching research info');
}
});


router.get('/news', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const collection = db.collection('News');
    const news = await collection.find({}).toArray();
    // console.log('News:', news);
    
    const transformedNews = news.map(doc => {
      return Object.keys(doc)
        .filter(key => key !== '_id')
        .map(key => doc[key]);
    }).flat(); 

    res.json(transformedNews);

  } catch (e) {
      console.error('Failed to fetch news info', e);
      if (e.response) {
          console.error('Error response data:', e.response.data);
      }
      res.status(500).send('Error fetching news info');
  }
});

router.get('/publication/papers', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const collection = db.collection('Publication');
    const papers = await collection.find({}).toArray();
    
    const transformedPapers = papers.map(doc => {
      return Object.keys(doc)
        .filter(key => key !== '_id')
        .map(key => doc[key]);
    }).flat(); 

    res.json(transformedPapers);

  } catch (e) {
    console.error('Failed to fetch papers info', e.response.data);
    res.status(500).send('Error fetching papers info');
  }
});

module.exports = router;