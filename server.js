require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT || 8000

const pool = new Pool({
    connectionString : process.env.CONNECTION_STRING
})

app.use(express.json())

app.get('/', async function(req, res) {

   try {
    const client = await pool.connect()

    const data =  await client.query('SELECT * FROM users')

    client.release()

    res.json(data.rows);
   } catch (error) {
    res.sendStatus(500)
   }
});

app.post("/", async (req,res)=>{
    try {
        const name = req.body?.name

        const client = await pool.connect()

        const { rows : [ user ] } = await client.query('INSERT INTO users(name) VALUES($1) RETURNING *', [ name ])

        client.release()

        res.json(user)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})




app.listen(PORT, console.log(PORT))