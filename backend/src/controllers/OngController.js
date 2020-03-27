const crypto = require("crypto");
const connection = require('../database/connection');   

module.exports = {

    async index (request, response){
        const ongs = await connection('ongs').select('*');//seleciona tudo da tabela ongs
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres aleatórios e são convertidos em string
        data = request.body;                              //do tipo hexadecimal
    
        await connection('ongs').insert({ //await faz com que o async espere ele ser executado para terminar o código
            id, name, email, whatsapp, city, uf,
        });
    
        return response.json({ id });
    }
};