const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pacienteRoutes= require('./src/routes/pacienteRoutes');

const app = express();

app.use(cors());

app.use (express,json());


mongoose.connect('',{
    serverSelectionTimeoutMS
}
)
.then(() => console.log('Conectado ao mongodb com sucesso!'))
.catch((err) =>console.error('Erro ao conectar o Mongodb',err));

app.get('/health',(req,res) => {
    res.status(200).json ({ status: 200, message :'servidor ativo!'});
});

app.use('/api',pacienteRoutes);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('servidor rodando na porta ${PORT}');
});




