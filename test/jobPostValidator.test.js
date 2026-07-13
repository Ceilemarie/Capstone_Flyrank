const http = require('node:http');
const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('../src/app');

async function postJson(server, payload) {
  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/employer/job-postings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return {
    status: response.status,
    body: await response.json(),
  };
}

async function withServer(run) {
  const app = createApp();
  const server = http.createServer(app);

  await new Promise((resolve) => server.listen(0, resolve));

  try {
    return await run(server);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test('accepts a valid employer job posting', async () => {
  await withServer(async (server) => {
    const response = await postJson(server, {
      headcount: 3,
      requirements: ['Node.js', 'Express', 'JavaScript'],
      title: 'Frontend Engineer',
      description: 'Build maintainable interfaces for our product team.',
    });

    assert.equal(response.status, 201);
    assert.equal(response.body.message, 'job posting accepted');
  });
});

test('rejects non-integer headcount values', async () => {
  await withServer(async (server) => {
    const response = await postJson(server, {
      headcount: '3',
      requirements: ['Node.js'],
      title: 'Frontend Engineer',
      description: 'Build maintainable interfaces for our product team.',
    });

    assert.equal(response.status, 400);
    assert.match(response.body.error, /headcount must be an integer greater than 0/);
  });
});

test('rejects invalid requirements arrays', async () => {
  await withServer(async (server) => {
    const response = await postJson(server, {
      headcount: 2,
      requirements: ['Node.js', 123],
      title: 'Frontend Engineer',
      description: 'Build maintainable interfaces for our product team.',
    });

    assert.equal(response.status, 400);
    assert.match(response.body.error, /requirements must be a clean array of strings/);
  });
});

test('rejects banned buzzwords in the submission', async () => {
  await withServer(async (server) => {
    const response = await postJson(server, {
      headcount: 2,
      requirements: ['Node.js', 'Fast-paced team culture'],
      title: 'Rockstar Frontend Engineer',
      description: 'Join our etc. driven team and ship fast.',
    });

    assert.equal(response.status, 400);
    assert.match(response.body.error, /submission contains banned buzzwords/);
  });
});