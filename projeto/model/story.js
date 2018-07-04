module.exports = function () {

    var db = require('./../libs/connect_db')();

    var Schema = require('mongoose').Schema;

    var storySchema = Schema({

        author: { type: Schema.Types.ObjectId, ref: 'Person' },
        title: String,
        carro: [{ type: Schema.Types.ObjectId, ref: 'Carro' }]
    });

    return db.model('Story', storySchema);
}