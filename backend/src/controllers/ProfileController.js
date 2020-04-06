const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_email = request.headers.authorization;
        const ong_senha = request.headers.authorization2;
        const incidents = await connection('incidents')
        .where('ong_email', ong_email)
        .where('ong_senha', ong_senha)
        .select('*');

        return response.json(incidents);
    }
}