const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const taskController = require('./controllers/taskController')



app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/tasks', taskController.getTasks)

app.post('/tasks', ( req, res ) => {
    const body = req.body;
    console.log(body);
    res.status(201).json({msg: "Usuario creado"});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})