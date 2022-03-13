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

app.get('/users', (request, response) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
    })
});

// Failed attempt of using params
// app.get('/users', (request, response) => {
//     // const ptag = request.query.ptag;
//     // const pname = request.query.pname;
//     db.query("SELECT * FROM users", (err, result) => {
//         if (err){
//             console.log(err);
//         } else{
//             response.send(result);
//         }
//         // console.log("test:" + ptag + pname);
//     })
// });

app.listen(3001, () => {
    console.log("Your server is running on port 3001");
})

