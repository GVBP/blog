/*
 * Arquivo de Schema da Collection 'albums'
 */

module.exports = function () {

    // Importa e executa a função de connection do banco
    var db = require('./../libs/connect_db')();

    // Var Schema que vai setar a collection
    var Schema = require('mongoose').Schema;

    // Schema da Collection 'albums'
    var album = Schema({

        _id : Number,
        userId : Number,
        post : [ String ],
        url : String
    });

    // Retorna o modelo da collection 'albums' com o Schema 'album'
    return db.model('albums', album);
}