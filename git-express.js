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
app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

app.listen(3000, () =>{
    console.log('Ta rodando.')
})