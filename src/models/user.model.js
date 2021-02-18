const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
    banned: {
        type: Boolean,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    discordID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(`User`, userSchema);
