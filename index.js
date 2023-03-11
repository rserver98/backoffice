const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 4500;
var serveIndex = require('serve-index');

app.use(bodyParser.json({ limit: '50mb' }))

app.all('/ok', (req, res) => {
    const date = new Date();
    const day = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    res.send(`OK! ${day} ${time}`)
})

app.all('/url', (req, res) => {
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
})

app.use('/', serveIndex(__dirname + '/download'));


app.listen(PORT)
console.log(`Servidor listen on port ${PORT}`)