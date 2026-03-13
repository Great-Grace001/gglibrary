const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-this-secret';
const TOKEN_EXPIRES_IN = '7d';

let mailTransporter;

app.use(express.json());
app.use(express.static(__dirname));

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function normalizePassword(password) {
  return String(password || '').trim();
}

function isValidEmail(email) {
  const strictEmailPattern = /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
  return strictEmailPattern.test(email);
}

function readUsers() {
  try {
    const raw = fs.readFileSync(USERS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

function getMailTransporter() {
  if (mailTransporter) {
    return mailTransporter;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  mailTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });

  return mailTransporter;
}

async function sendSignupConfirmationEmail(user) {
  const transporter = getMailTransporter();
  if (!transporter) {
    return { sent: false, reason: 'SMTP is not configured.' };
  }

  const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
  const subject = 'Welcome to Great Grace Library';
  const text = `Hello ${user.name},\n\nYour account has been created successfully on Great Grace Library. You can now log in and start your JAMB CBT practice.\n\nBest regards,\nGreat Grace Library`;
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#1A1D2E;">
      <h2 style="margin-bottom:8px;">Welcome to Great Grace Library</h2>
      <p>Hello ${user.name},</p>
      <p>Your account has been created successfully. You can now log in and start your JAMB CBT practice.</p>
      <p style="margin-top:24px;">Best regards,<br/>Great Grace Library</p>
    </div>
  `;

  await transporter.sendMail({
    from: fromAddress,
    to: user.email,
    subject,
    text,
    html
  });

  return { sent: true };
}

function createToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRES_IN }
  );
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired session. Please log in again.' });
  }
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/signup', async (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = normalizeEmail(req.body.email);
  const password = normalizePassword(req.body.password);

  if (!name) {
    return res.status(400).json({ message: 'Full name is required.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Use a valid email address.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  const users = readUsers();
  const existing = users.find((user) => user.email === email);
  if (existing) {
    return res.status(409).json({ message: 'An account with this email already exists.' });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: passwordHash,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeUsers(users);

    let mailStatus = { sent: false };
    try {
      mailStatus = await sendSignupConfirmationEmail(newUser);
    } catch (error) {
      console.error('Signup email failed:', error.message);
    }

    return res.status(201).json({
      message: 'Account created successfully.',
      user: { name: newUser.name, email: newUser.email },
      emailSent: mailStatus.sent
    });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create account right now.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const email = normalizeEmail(req.body.email);
  const password = normalizePassword(req.body.password);

  const users = readUsers();
  const user = users.find((record) => record.email === email);

  if (!user) {
    return res.status(404).json({ message: 'Account not found. Please sign up first.' });
  }

  let passwordMatches = false;
  const hashedPasswordPattern = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/;
  if (hashedPasswordPattern.test(user.password)) {
    passwordMatches = await bcrypt.compare(password, user.password);
  } else {
    passwordMatches = normalizePassword(user.password) === password;
    if (passwordMatches) {
      user.password = await bcrypt.hash(password, 10);
      writeUsers(users);
    }
  }

  if (!passwordMatches) {
    return res.status(401).json({ message: 'Incorrect password. Try again or reset it.' });
  }

  const token = createToken(user);

  return res.json({
    message: 'Login successful.',
    token,
    user: { name: user.name, email: user.email }
  });
});

app.post('/api/auth/forgot-password', async (req, res) => {
  const email = normalizeEmail(req.body.email);
  const newPassword = normalizePassword(req.body.newPassword);

  if (newPassword.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  const users = readUsers();
  const userIndex = users.findIndex((record) => record.email === email);

  if (userIndex < 0) {
    return res.status(404).json({ message: 'That email does not match any registered account.' });
  }

  try {
    users[userIndex].password = await bcrypt.hash(newPassword, 10);
    users[userIndex].updatedAt = new Date().toISOString();
    writeUsers(users);

    return res.json({ message: 'Password reset successful.' });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to reset password right now.' });
  }
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  const users = readUsers();
  const user = users.find((record) => record.id === req.user.sub && record.email === req.user.email);

  if (!user) {
    return res.status(401).json({ message: 'Session is no longer valid.' });
  }

  return res.json({
    user: {
      name: user.name,
      email: user.email
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
