import mysql from 'mysql2';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crm"
});

con.connect(function(err) {
    if (err) {
        console.error("Connection Error:", err.message);
    } else {
        console.log("Connected to MySQL database");
    }
});

export default con;
