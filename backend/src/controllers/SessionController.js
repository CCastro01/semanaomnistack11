const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { senha } = request.body;
        const { email } = request.body;
        const ong = await connection('ongs')
        .where('senha', senha) 
        .where('email', email)
        .select('name')
        .first();

        if ( !ong ){
            return response.status(400).json({ error: "Dados incorretos"});
        }

        return response.json(ong);
    }
}