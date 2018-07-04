/*
 * Arquivo de Schema da Collection 'users'
 */

module.exports = function () {

    // Importa e executa a função de connection do banco
    var db = require('./../libs/connect_db')();

    // Var Schema que vai setar a collection
    var Schema = require('mongoose').Schema;

    // Schema da Collection 'users'
    var user = Schema({

        _id : Schema.Types.ObjectId,
        name : String,
        username : String,
        email : String,
        geo : { lat : String, lng : String },
        phone : String,
        password : String,
        post : [{ type: Schema.Types.ObjectId, ref: 'posts' }],
        comment : [{ type: Schema.Types.ObjectId, ref: 'comments' }]
    });

    // Retorna o modelo da collection 'users' com o Schema 'user'
    return db.model('users', user);
}