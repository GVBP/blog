module.exports = function () {

    var db = require('./../libs/connect_db')();

    var Schema = require('mongoose').Schema;

    var carroSchema = Schema({

        carro: String,
        year: Number,
        dono: { type: Schema.Types.ObjectId, ref: 'Person' }
    });

    return db.model('Carro', carroSchema);
}