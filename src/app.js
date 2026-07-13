const express = require('express');
const { validateJobPost } = require('./jobPostValidator');

function createApp() {
  const app = express();

  app.use(express.json());

  app.post('/employer/job-postings', validateJobPost, (req, res) => {
    res.status(201).json({
      message: 'job posting accepted',
      data: req.body,
    });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = { createApp };