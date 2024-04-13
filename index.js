const express = require('express');
const pool = require("./Database/db")
const PORT = 3000

const app = express();
app.use(express.json());

// Routes
app.get("/",(req,res)=>{
    res.sendStatus(200);
})

app.post("/",(req,res)=>{
    const {name,location} = req.body;
    res.status(200).send({
        message: `Your keys were ${name}, ${location}`
    })
})



app.listen(PORT,()=>{
    console.log(`Server listening on the PORT ${PORT}`)
})