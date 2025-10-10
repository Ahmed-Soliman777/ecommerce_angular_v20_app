const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
    return
})

userSchema.methods.comparePassword = function (candidate) {
    return bcrypt.compare(candidate, this.password)
}

const User = mongoose.model('users', userSchema);
module.exports = User;