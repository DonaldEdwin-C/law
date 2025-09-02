const db = require('../db');

exports.getStreaks = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM achievement_streaks WHERE user_id = ?",
      [req.user.id]
    );

    res.json(rows[0] || { streak_count: 0, last_active: null });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching streaks");
  }
};

exports.updateStreaks = async (req, res) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const [rows] = await db.execute(
      "SELECT * FROM achievement_streaks WHERE user_id = ?",
      [req.user.id]
    );

    if (rows.length === 0) {
      await db.execute(
        "INSERT INTO achievement_streaks (user_id, streak_count, last_active) VALUES (?, ?, ?)",
        [req.user.id, 1, today]
      );
      return res.json({ streak_count: 1 });
    }

    const streak = rows[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    let newCount = 1;
    if (streak.last_active === yesterdayStr) {
      newCount = streak.streak_count + 1;
    }

    await db.execute(
      "UPDATE achievement_streaks SET streak_count = ?, last_active = ? WHERE user_id = ?",
      [newCount, today, req.user.id]
    );

    res.json({ streak_count: newCount });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating streaks");
  }
};
