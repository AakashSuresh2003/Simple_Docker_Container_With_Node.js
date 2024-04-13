const {Pool}  = require("pg")

const pool = new Pool({
    host : 'db',
    port:5432,
    user:"Admin",
    password:"Admin-Access",
    db:"StudentDb"
})

module.exports = pool;