const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('http://192.168.0.202:3000')
})
app.listen(process.env.PORT || 3000)