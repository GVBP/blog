/*
 * Arquivo de conexão com o mongodb
 * Requisito: mongoose@4.6.5
 */

var mongoose = require('mongoose');
//var db conterá a localização do banco
var db;

module.exports = function() {

    if(!db) {

        db = mongoose.connect('mongodb://localhost/blog');
    }

    return db;
}