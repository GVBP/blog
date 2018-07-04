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
        userId : { type: Schema.Types.ObjectId, ref: 'users' },
        Featured : Boolean,
        title : String,
        body : String,
        date : { day : Date, month : Date, year : Date },
        imgPost : String,
        comment : [{ type: Schema.Types.ObjectId, ref: 'comments' }]
    });

    // Retorna o modelo da collection 'posts' com o Schema 'post'
    return db.model('posts', post);
}