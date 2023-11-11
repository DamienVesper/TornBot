import Mongoose, { Schema } from 'mongoose';

import type { LeaderboardDoc } from '../typings/models';

const leaderboardSchema = new Schema({
    creationDate: { type: String, required: true },
    accounts: { type: Map, required: true }
});

const Leaderboard = Mongoose.model<LeaderboardDoc>(`Leaderboard`, leaderboardSchema);

export default Leaderboard;
