import * as Mongoose from 'mongoose';

import { LeaderboardDoc } from '../types/models';

const leaderboardSchema = new Mongoose.Schema({
    creationDate: { type: String, required: false, default: new Date().toString() },
    accounts: { type: Array, required: true }
});

const User = Mongoose.model<LeaderboardDoc>(`Leaderboard`, leaderboardSchema);

export default User;
