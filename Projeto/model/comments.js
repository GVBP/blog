/*
 * Arquivo de Schema da Collection 'comments'
 */

module.exports = function () {

    // Importa e executa a função de connection do banco
    var db = require('./../libs/connect_db')();

    // Var Schema que vai setar a collection
    var Schema = require('mongoose').Schema;

    // Schema da Collection 'comments'
    var comment = Schema({

        _id : Schema.Types.ObjectId,
        postId : { type: Schema.Types.ObjectId, ref: 'posts' },
        emailUserId : { type: Schema.Types.ObjectId, ref: 'users' },
        body : String
    });

    // Retorna o modelo da collection 'comments' com o Schema 'comment'
    return db.model('comments', comment);
}