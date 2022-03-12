const express = require ("express");
const app = express();
const mysql = require('mysql2');
const cors = require ("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"newuser",
    host: "localhost",
    password:"password",
    database: "648trial",
})

// 3001 is our route
app.post('/create', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const userid = req.body.userid;
    const password = req.body.password;

    db.query('INSERT INTO users (userid, name, phone, email, password) VALUES (?,?,?,?,?)', 
    [userid, name, phone, email, password], (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send("Values Inserted");
        }
    }
    );
})

app.listen(3001, () => {
    console.log("Your server is running on port 3001");
})

