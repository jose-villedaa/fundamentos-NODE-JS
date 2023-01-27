const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ONICHAN UwU')
})

app.post('/home', (req, res) =>{
    res.send('Estas en el inicio ahora')
}
)

app.put('/kinal/1', (req, res) =>{
    res.send('1 editado')
}
)

app.delete('/kinal/1', (req, res) =>{
    res.send('1 eliminado')
}
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})