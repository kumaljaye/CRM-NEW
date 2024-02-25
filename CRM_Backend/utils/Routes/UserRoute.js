import express from 'express';
import con from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/userlogin', (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    con.query(sql, [req.body.email], (err, result) => {
        if (err) {
            console.error("Query error:", err.message);
            return res.json({ loginStatus: false, Error: "Query error" });
        }

        if (result.length > 0) {


        const user = result[0];
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) {
                console.error("Password comparison error:", err.message);
                return res.status(500).json({ loginStatus: false, error: "Internal server error" });
            }

            if (!isMatch) {
                return res.status(401).json({ loginStatus: false, error: "Wrong email or password" });
            }

            const token = jwt.sign(
                { role: "user", email: user.email },
                "user_secret_key",
                { expiresIn: "1d" }
            );
            res.cookie('token', token);
            return res.json({ loginStatus: true, id: user.id });
        });
    } else {
        return res.json({ loginStatus: false, Error: "Wrong email or password" });
    }
    });
});

export { router as UserRouter };
