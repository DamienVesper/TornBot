import * as Mongoose from 'mongoose';

import { UserDoc } from '../typings/models';

const userSchema = new Mongoose.Schema({
    banned: { type: Boolean, required: false, default: false },
    creationDate: { type: String, required: true },

    accountName: { type: String, required: true, unique: true },
    discordID: { type: String, required: true, unique: true }
});

const User = Mongoose.model<UserDoc>(`User`, userSchema);

export default User;
