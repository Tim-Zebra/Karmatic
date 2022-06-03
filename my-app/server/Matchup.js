// May NOT be needed. Unsure why this file is here in folder 'server' at the moment.

const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({

});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
