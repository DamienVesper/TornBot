import * as Mongoose from 'mongoose';

interface UserDoc extends Mongoose.Document {
    banned: boolean;
    creationDate: String;

    accountName: string;
    discordID: string;
}

export { UserDoc };
