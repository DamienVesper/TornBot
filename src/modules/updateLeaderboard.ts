import Leaderboard from '../models/leaderboard.model';
import { TornAccount } from '../typings/accounts';

import getTornUsers from '../utils/getTornUsers';
import log from '../utils/log';

/**
 * Initialize a new cached leaderboard.
 * @returns A fulfillment promise.
 */
const createLeaderboard = async () => {
    const tornUsers: Map<string, TornAccount> = await getTornUsers();

    const lb = new Leaderboard({
        creationDate: new Date().toString(),
        accounts: tornUsers
    });

    return await lb.save();
};

/**
 * Update the current cached leaderboard.
 */
const updateLeaderboard = async () => {
    log(`cyan`, `Updating leaderboard...`);
    const currentLB = await Leaderboard.findOne();

    if (!currentLB) await createLeaderboard();
    else {
        await currentLB.delete();
        await createLeaderboard();
    }

    log(`green`, `Leaderboard updated.`);
};

export default updateLeaderboard;
