const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Bienvenido a Nuestro Primer Servidor Con Express')
})
app.get('/nuevarama', function (req, res){
    res.send('Estas en la Nueva Rama')
})
app.listen(3000)