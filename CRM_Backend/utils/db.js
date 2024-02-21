import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crm",
    // Specify the authentication plugin explicitly
    authPlugin: 'mysql_native_password' // This is the older authentication plugin
});

con.connect(function(err) {
    if (err) {
        console.error("Connection Error:", err.message);
    } else {
        console.log("Connected to MySQL database");
    }
});

export default con;
