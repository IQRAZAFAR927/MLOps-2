// auth.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'another_secret_key';

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  // Simple storage; use database in real scenario
  users.push({ email, password });
  res.json({ message: 'User signed up' });
});

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  // Reset logic here
  res.json({ message: 'Password reset link sent' });
});

app.listen(4000, () => {
  console.log('Auth server running on port 4000');
});
