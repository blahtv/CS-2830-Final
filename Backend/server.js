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

app.get('/message', (req, res) => {
    res.json({ message: "Hello from Server!" });
}); //Send to frontend component "Home" at route /message


app.get('/api/data/10', (req, res) => {
    res.json({ message: "Bonjour!" });
}); //Send to frontend component "FlightInfo" at route /api/data/10

app.get('/api/data/20', (req, res) => {
    res.json({ message: "Hola!" });
}); //Send to frontend component "FlightInfo" at route /api/data/20

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });