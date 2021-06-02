import * as Mongoose from 'mongoose';

interface UserDoc extends Mongoose.Document {
    banned: boolean,
    creationDate: Date,
    accountName: string,
    discordID: string
}

export { UserDoc };
