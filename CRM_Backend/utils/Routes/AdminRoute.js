import express from 'express';
import con from '../db.js';
import  jwt  from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error("Query error:", err.message); // Log query error
            return res.json({ loginStatus: false, Error: "Query error" });
        }
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "admin", email: email },
                "jwt_secret_key",
                { expiresIn: "1d"}
            );
            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" });  
        }
    });
});


router.post('add_CR', (req,res) => {
    const sql = "INSERT INTO topic ('name') VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
    })
})                           

export { router as adminRouter };
