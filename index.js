const express = require('express');
const pool = require("./Database/db")
const PORT = 3000

const app = express();
app.use(express.json());

// Routes
app.get("/", async(req,res)=>{
    try{
        const data = await pool.query('SELECT * FROM schools');

        res.sendStatus(200).send(data.rows)
    }
    catch(err)
    {
        console.log(err);
        res.sendStatus(500);
    }
})

app.post("/", async(req,res)=>{
    const {name,location} = req.body;
    try{
        await pool.query('INSERT INTO schools (name,address) VALUES ($1,$2)',[name,location]);
        res.sendStatus(200).send({message:"Successfully added child"})
    }
    catch(err)
    {
        console.log(err);
        res.sendStatus(500);
    }
})

app.get("/setup", async (req,res)=>{
    try{
        await pool.query('CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100),address VARCHAR(100))');
        res.sendStatus(200).send({message:"Successfully created table"});
    }
    catch(err)
    {
        console.log(err);
        res.sendStatus(500);
    }
})

app.listen(PORT,()=>{
    console.log(`Server listening on the PORT ${PORT}`)
})