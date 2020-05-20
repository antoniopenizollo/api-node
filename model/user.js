const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    email: { type : String, require: true,unique: true, lowercase: true },
    password: { type: String, require: true, select: false },
    created: { type: Date, default: Date.now }

});

module.exports = mongoose.model('User',UserSchema);