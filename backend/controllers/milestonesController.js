const db = require("../db");

exports.getMilestones = async (req, res) => {
  try {
    const goalId = req.params;
    const [rows] = await db.execute(
      "SELECTS * from milestones where goal_id = ?",
      [goalId]
    );
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.statu(500).send();
  }
};

exports.addMilestones = async (req, res) => {
  try {
    const goalId = req.params;
    const { amount } = req.body;
    const [result] = await db.execute(
      "INSERT INTO milestones (goal_id, amount) VALUES (?, ?)",
      [goalId, amount]
    );
    res.json({ success: true, milestoneId: result.insertId });
  } catch (err) {
    console.log(err);
    res.statu(500).send();
  }
};
