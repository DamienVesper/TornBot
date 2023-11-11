import Leaderboard from '../models/leaderboard.model';

import log from './log';
import getTornUsers from './getTornUsers';

import type { TornAccount } from '../typings/accounts';

/**
 * Initialize a new cached leaderboard.
 * @returns A fulfillment promise.
 */
const createLeaderboard = async (): Promise<void> => {
    const tornUsers: Map<string, TornAccount> = await getTornUsers();

    const lb = new Leaderboard({
        creationDate: new Date().toString(),
        accounts: tornUsers
    });

    await lb.save();
};

/**
 * Update the current cached leaderboard.
 */
const updateLeaderboard = async (): Promise<void> => {
    const currentLB = await Leaderboard.findOne();

    if (currentLB == null) await createLeaderboard();
    else {
        await Leaderboard.deleteOne({ _id: currentLB._id });
        await createLeaderboard();
    }

    log(`green`, `Leaderboard updated.`);
};

export default updateLeaderboard;
