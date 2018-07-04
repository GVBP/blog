module.exports = function () {

    var db = require('./../libs/connect_db')();

    var Schema = require('mongoose').Schema;

    var personSchema = Schema({

        _id: Schema.Types.ObjectId,
        name: String,
        age: Number,
        carro: [{ type: Schema.Types.ObjectId, ref: 'Carro' }],
        stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
    });

    return db.model('Person', personSchema);
}