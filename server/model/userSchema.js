const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    leadname: {
        type: String,
        required:true
    },
})

const User = mongooose.model('USER', userSchema);

module.exports = User;