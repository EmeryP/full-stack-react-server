import express from 'express';
import content from '../middleware/content.js'

const router = express.Router();

router.get('/', (req,res) => {
  res.write('Server Home')
  res.end();
})

router.get('/content', (req, res) => {
  const fileContent = content();
  let contentStringified = JSON.parse(fileContent)
  res.json(contentStringified);
})

export default router;
