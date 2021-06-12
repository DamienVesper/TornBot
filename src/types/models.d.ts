import * as Mongoose from 'mongoose';
import { TornAccount } from './account';

interface UserDoc extends Mongoose.Document {
    banned: boolean;
    creationDate: String;

    accountName: string;
    discordID: string;
}

interface LeaderboardDoc extends Mongoose.Document {
    creationDate: string;
    accounts: TornAccount[];
}

export {
    UserDoc,
    LeaderboardDoc
};
