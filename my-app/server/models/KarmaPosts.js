const { Schema, model } = require('mongoose');

const karmaPostsSchema = new Schema({

});

const KarmaPosts = model('KarmaPosts', karmaPostsSchema);

module.exports = KarmaPosts;