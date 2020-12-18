const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate-trashtalk.js')
const handlebars = require('handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.render('index')
})

handlebars.registerHelper('Inspect', function (jobTitle, jobName, options) {
  if (jobTitle === jobName) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

app.post('/', (req, res) => {
  const option = req.body.target
  const person = generateTrashTalk(option)
  res.render('index', {
    person,
    option
  })

})


app.listen(port, () => {
  console.log(`The server in now listening to localhost:${port}`)
})


