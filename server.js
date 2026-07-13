const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const jobs = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/employer/post-job');
});

app.get('/employer/post-job', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'post-job.html'));
});

app.post('/employer/post-job', (req, res) => {
  const {
    companyName,
    jobTitle,
    location,
    employmentType,
    headcount,
    requiredSkills,
    jobDescription,
  } = req.body;

  if (!companyName || !jobTitle || !location || !employmentType || !headcount || !requiredSkills || !jobDescription) {
    return res.status(400).send(`
      <h1>Missing required fields</h1>
      <p>Please complete every field before posting a job.</p>
      <p><a href="/employer/post-job">Go back</a></p>
    `);
  }

  const job = {
    id: jobs.length + 1,
    companyName: companyName.trim(),
    jobTitle: jobTitle.trim(),
    location: location.trim(),
    employmentType: employmentType.trim(),
    headcount: Number(headcount),
    requiredSkills: requiredSkills.split(',').map((skill) => skill.trim()).filter(Boolean),
    jobDescription: jobDescription.trim(),
    createdAt: new Date().toISOString(),
  };

  jobs.push(job);

  res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Job Posted</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main class="page-shell confirmation-shell">
          <section class="card">
            <span class="eyebrow">Posting received</span>
            <h1>${escapeHtml(job.jobTitle)} has been posted</h1>
            <p>We saved the listing for ${escapeHtml(job.companyName)}. Your posting is now ready for review in the capstone demo flow.</p>
            <div class="summary-grid">
              <div><strong>Location</strong><span>${escapeHtml(job.location)}</span></div>
              <div><strong>Type</strong><span>${escapeHtml(job.employmentType)}</span></div>
              <div><strong>Headcount</strong><span>${job.headcount}</span></div>
              <div><strong>Skills</strong><span>${escapeHtml(job.requiredSkills.join(', '))}</span></div>
            </div>
            <a class="button-link" href="/employer/post-job">Post another job</a>
          </section>
        </main>
      </body>
    </html>
  `);
});

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}