const { Schema, model } = require('mongoose');

const locationSchema = new Schema({

});

const Location = model('Location', locationSchema);

module.exports = Location;