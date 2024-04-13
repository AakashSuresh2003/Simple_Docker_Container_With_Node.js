const express = require('express');
const pool = require("./Database/db")
const PORT = 3000

const app = express();
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM schools');
        res.status(200).send(data.rows); // Use res.status().send() to set status and send response
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error"); // Send a generic error message
    }
})

app.post("/", async (req, res) => {
    const { name, location } = req.body;
    try {
        await pool.query('INSERT INTO schools (name,address) VALUES ($1,$2)', [name, location]);
        res.status(200).send({ message: "Successfully added child" });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

app.get("/setup", async (req, res) => {
    try {
        await pool.query('CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100),address VARCHAR(100))');
        res.status(200).send({ message: "Successfully created table" });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on the PORT ${PORT}`)
})
