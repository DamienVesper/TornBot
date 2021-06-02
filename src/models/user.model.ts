import * as Mongoose from 'mongoose';

import { UserDoc } from '../types/models';

const userSchema = new Mongoose.Schema({
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

const User = Mongoose.model<UserDoc>(`User`, userSchema);

export default User;
