exports.getGoals = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute(
      'SELECT * FROM goals WHERE user_id = ?',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error("Failed to fetch goals:", err);
    res.status(500).send("Internal Server Error");
  }
};

exports.addGoals = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const { name, target_amount, start_date, end_date } = req.body;

    const [result] = await db.execute(
      `INSERT INTO goals (user_id, name, target_amount, start_date, end_date)
       VALUES (?, ?, ?, ?, ?)`,
      [req.user.id, name, target_amount, start_date, end_date]
    );

    res.json({ success: true, goalId: result.insertId });
  } catch (err) {
    console.error("Failed to add goal:", err);
    res.status(500).send("Internal Server Error");
  }
};
