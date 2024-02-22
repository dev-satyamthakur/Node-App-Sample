require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello, Neo")
})

app.get("/satyam", (req, res) => {
    res.send("<a href='http://satyamthakur.com'>Satyam Portfolio</a>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app running on part ${port}`);
})