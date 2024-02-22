import express from 'express';
import con from '../db.js';
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt'; 
import multer from 'multer';
import path from 'path';

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

router.get('/view_cr', (req, res) => {
    const sql = "SELECT * FROM add_cr";
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: "Query Error" });
        }
        return res.json({ Status: true, Result: result });
    });
});

// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})



router.post('/add_cr', (req, res) => {
    const sql = "INSERT INTO add_cr (topic, description, prototype) VALUES (?, ?, ?)";
    const values = [req.body.topic, req.body.description, req.body.prototype]; 
    con.query(sql, values, (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: "Query Error" });
        }
        return res.json({ Status: true });
    });
});
router.post('/add_user', (req, res) => {
    const sql = 'INSERT INTO user \
         (name, department, type, email, password) \
         VALUES (?)';
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if (err) {
            return res.json({ Status: false, Error: "Hashing Error" });
        }
        const values = [
            req.body.name,
            req.body.department,
            req.body.type,
            req.body.email,
            hash
        ];
        con.query(sql, [values], (err, result) => {
            if (err) {
                return res.json({ Status: false, Error: "Query Error" });
            }
            return res.json({ Status: true, Message: "User added successfully" });
        });
    });
});

                   

export { router as adminRouter };
