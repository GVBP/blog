/*
 * Arquivo de Schema da Collection 'posts'
 */

module.exports = function () {

    // Importa e executa a função de connection do banco
    var db = require('./../libs/connect_db')();

    // Var Schema que vai setar a collection
    var Schema = require('mongoose').Schema;

    // Schema da Collection 'posts'
    var post = Schema({

        _id : Schema.Types.ObjectId,
        userId : { type: Schema.Types.ObjectId, ref: 'Users' },
        Featured : Boolean,
        title : String,
        body : String,
        date : { day : Number, month : Number, year : Number },
        imgPost : String,
        comments : [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
    });

    // Retorna o modelo da collection 'posts' com o Schema 'post'
    return db.model('Posts', post);
}