const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minlength: 3 },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'instructor'], default: 'student' }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
