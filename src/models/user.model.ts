import * as mongoose from 'mongoose';

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
        required: true,
        unique: true
    },
    discordID: {
        type: String,
        required: true,
        unique: true
    }
});

export const User = mongoose.model(`User`, userSchema);
