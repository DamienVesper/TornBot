import * as Mongoose from 'mongoose';
import { TornAccount } from './accounts';

interface UserDoc extends Mongoose.Document {
    banned: boolean
    creationDate: string

    accountName: string
    discordID: string
}

interface LeaderboardDoc extends Mongoose.Document {
    creationDate: string
    accounts: Map<string, TornAccount>
}

export {
    UserDoc,
    LeaderboardDoc
};
