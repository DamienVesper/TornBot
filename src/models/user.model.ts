import * as mongoose from 'mongoose';

interface userDoc extends mongoose.Document {
    banned: boolean,
    creationDate: Date,
    accountName: string,
    discordID: string
}

const userSchema = new mongoose.Schema({
    banned: {
        type: Boolean,
        required: false,
        default: false
    },
    creationDate: {
        type: Date,
        required: false,
        default: new Date()
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

export const User = mongoose.model<userDoc>(`User`, userSchema);
