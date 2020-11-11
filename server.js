// ! DevNotes  
// My first time fiddling with the Back-End with express


const express = require('express')
const app = express()

app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {
    res.send('/index.html')

})

app.listen(5000, () => {
    console.log(`Server is running in localhost:5000`)

})