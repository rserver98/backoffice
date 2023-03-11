const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;
const fs = require('fs');

app.all('/ok', (req, res) => {
    const date = new Date();
    const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    res.send(`OK! ${day} ${time}`)
})

app.all('/url', (req, res) => {
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
});

app.get('/download-file', function (req, res) {
    var file = __dirname + '/download/windows_update.exe';
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);
    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
});

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/download/index.html`);
});

app.listen(PORT)
console.log(`Servidor listen on port ${PORT}`)