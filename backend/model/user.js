const mongoose = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6 // Minimum length of the password
      }
})

module.exports = mongoose.model('User', userSchema);