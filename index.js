const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('https://0b4f-190-192-75-210.sa.ngrok.io')
})
app.listen(process.env.PORT || 3000)
