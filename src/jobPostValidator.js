const bannedBuzzwords = ['rockstar', 'fast-paced', 'etc.'];

function validateJobPost(req, res, next) {
  const { headcount, requirements, title, description } = req.body || {};

  if (!Number.isInteger(headcount) || headcount <= 0) {
    return res.status(400).json({
      error: 'headcount must be an integer greater than 0',
    });
  }

  if (!Array.isArray(requirements) || requirements.some((item) => typeof item !== 'string' || item.trim() === '')) {
    return res.status(400).json({
      error: 'requirements must be a clean array of strings',
    });
  }

  const textFields = [title, description, ...requirements];
  const lowerText = textFields.filter(Boolean).join(' ').toLowerCase();

  if (bannedBuzzwords.some((buzzword) => lowerText.includes(buzzword))) {
    return res.status(400).json({
      error: 'submission contains banned buzzwords',
    });
  }

  return next();
}

module.exports = {
  validateJobPost,
  bannedBuzzwords,
};