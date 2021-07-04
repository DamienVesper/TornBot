import Leaderboard from '../models/leaderboard.model';
import { TornAccount } from '../types/accounts';

import getTornUsers from '../utils/getTornUsers';
import log from '../utils/log';

const createLeaderboard = async () => {
    const tornUsers: Map<string, TornAccount> = await getTornUsers();

    const lb = new Leaderboard({
        creationDate: new Date().toString(),
        accounts: tornUsers
    });

    return await lb.save();
};

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
