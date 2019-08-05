const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true, select: false},
    created: {type: Date, default: Date.now}
});

userSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, encypted) => {
        user.password = encypted;
        return next;
    });
});

module.exports = mongoose.model('user', userSchema);