const express = require('express');
const app = express();

var usuarios = [
    {
        id:1,
        name:'Away!'
    },
    {
        id:2,
        name:'Bora!'
    }
];
app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

app.post('/usuarios/adicionar', (req, res) =>{
    usuarios.push(req.body)
    res.send(usuarios)
});
app.put('/usuarios/alterar/:id', (req, res) => {
    let usuario = usuarios.find(us => us.id === req.params.id)
    usuarios.name = req.body.name;
    res.send(usuarios)
});
app.delete('/usuarios/deletar/:id', (req, res) => {
    
});

app.listen(3000, () =>{
    console.log('Ta rodando.')
});