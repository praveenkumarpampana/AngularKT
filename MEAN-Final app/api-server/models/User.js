
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, function (err, hash) {
        // Store hash in your password DB.
        user.password = hash;
        next();
    });

});

UserSchema.methods.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, callback);
}

UserSchema.methods.toJSON = function () {
    var user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('User', UserSchema);