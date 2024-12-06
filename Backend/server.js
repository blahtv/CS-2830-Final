const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());

const corsOptions = {
    origin:'http://localhost:3000',
    allowedHeaders:['Content-Type','Authorization']
};

app.use(express.json());


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'flight_info'
})

db.connect(err =>{
    if(err) console.log(err);
    console.log("Connected to mySQL database");
})

app.get('/message', (req, res) => {
    res.json({ message: "Server Online" });
}); //Send to frontend component "Home" at route /message


app.get('/api/data/:id', (req,res) => {
    console.log("searching database");
    const {id} = req.params;
    const query = 'SELECT * FROM flights WHERE id = ?';
    db.query(query, [id], (err,results) => {
        if(err) console.log(err);
        else res.json(results.length ? results[0] : {error: "No entry found"});
    });
}); //Send database information to frontend component "FlightInfo" at route /flight

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });