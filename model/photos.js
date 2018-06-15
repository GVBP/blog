/*
 * Arquivo de Schema da Collection 'photos'
 */

module.exports = function () {

    // Importa e executa a função de connection do banco
    var db = require('./../libs/connect_db')();

    // Var Schema que vai setar a collection
    var Schema = require('mongoose').Schema;

    // Schema da Collection 'photos'
    var photo = Schema({

        _id : Number,
        albumId : Number,
        url : String
    });

    // Retorna o modelo da collection 'photos' com o Schema 'photo'
    return db.model('photos', photo);
}