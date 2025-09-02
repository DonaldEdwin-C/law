exports.getPayments = async (req, res) => {
    const db = req.app.locals.db;
    const [rows] = await db.query(
        'SELECT * FROM payments WHERE user_id = ?',
        [req.user.id]
    );
    res.json(rows);
};

exports.addPayments = async (req, res) => {
    const db = req.app.locals.db;
    const { description, amount, category, mode_of_payment, type, payment_date, goal_id } = req.body;

    // 1. Insert the payment
    const [result] = await db.query(
        `INSERT INTO payments 
        (user_id, description, amount, category, mode_of_payment, type, payment_date, goal_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [req.user.id, description, amount, category, mode_of_payment, type, payment_date, goal_id || null]
    );

    // 2. If linked to a goal, update the goal's current_amount
    if (goal_id) {
        await db.query(
            'UPDATE goals SET current_amount = current_amount + ? WHERE id = ? AND user_id = ?',
            [amount, goal_id, req.user.id]
        );
    }

    res.json({ success: true, paymentId: result.insertId });
};
