const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //caminho relativo do arquivo

const app = express();

app.use(cors());
app.use(express.json());//faz com que o express faça com que o json seja entendível pela aplcação
app.use(routes);



//request guarda todos os dados que vem da requisição do usuário
//response tem a responsabilidade de retornar uma resposta para o usuário


app.listen(3333);