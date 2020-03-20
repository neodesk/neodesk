const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('login')
})

app.use(express.static(__dirname + '/public'));

app.listen(3333)