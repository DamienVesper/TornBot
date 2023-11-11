import type * as Mongoose from 'mongoose';
import { type TornAccount } from './accounts';

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

export type {
    UserDoc,
    LeaderboardDoc
};
