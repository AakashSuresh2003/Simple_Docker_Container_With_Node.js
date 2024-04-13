const express = require('express');
const pool = require("./Database/db")
const PORT = 3000

const app = express();



app.listen(PORT,()=>{
    console.log(`Server listening on the PORT ${PORT}`)
})