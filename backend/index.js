const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const initDB = require('./db');
const authenticate = require('./middleware/authenticate');

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const JWT_SECRET = "supersecret";

// initialize DB and attach to app.locals
initDB().then(conn => {
  app.locals.db = conn;
});

// get all users
app.get('/users', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute("SELECT id, username FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// register user
app.post('/users', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await db.execute("INSERT INTO users (username, password) VALUES (?, ?)", [
      req.body.username,
      hashedPassword
    ]);
    res.status(201).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// login user
app.post('/users/login', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute("SELECT * FROM users WHERE username = ?", [
      req.body.username
    ]);
    const user = rows[0];
    if (!user) {
      return res.status(400).send('Cannot find User');
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.json({ message: "Success", token });
    } else {
      res.send('Not allowed');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Import routes
const paymentsRoutes = require('./routes/paymentsRoutes');
const goalsRoutes = require('./routes/goalsRoutes');
const milestoneRoutes = require('./routes/milestonesRoutes');
const streakRoutes = require('./routes/streaksRoutes');

app.use('/payments', paymentsRoutes);
app.use('/goals', goalsRoutes);
app.use('/milestones', milestoneRoutes);
app.use('/streaks', streakRoutes);

// profile route
app.get('/me', authenticate, (req, res) => {
  res.json({ id: req.user.id, username: req.user.username });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
