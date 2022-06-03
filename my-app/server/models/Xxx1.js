const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({

});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
