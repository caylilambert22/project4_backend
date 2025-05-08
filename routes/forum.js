const express = require('express');
const router = express.Router();
const db = require('../db/dbUtil');

router.get('/questions', async (req, res) => {
  console.log('Forum is working!');
  try {
    const [questions] = await db.execute('SELECT * FROM forum_questions');
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Error fetching questions');
  }
});


router.post('/answers', async (req, res) => {
  const { questionId, answer, userId } = req.body;

  if (!answer || !questionId || !userId) {
    return res.status(400).send('Answer, Question ID, and User ID are required');
  }

  try {
    await db.execute('UPDATE forum_questions SET answer = ?, user_id = ?, updated_at = NOW() WHERE id = ?', [answer, userId, questionId]);
    res.status(200).send('Answer submitted successfully');
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).send('Error submitting answer');
  }
});

module.exports = router;
