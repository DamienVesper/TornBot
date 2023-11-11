import config from '../../config/config';

import log from '../utils/log';
import { logHeader } from '../utils/logExtra';
import refreshActivity from '../utils/refreshActivity';
import updateLeaderboard from '../utils/updateLeaderboard';

import type { Client } from '../typings/discord';

export default async (client: Client): Promise<void> => {
    log(`green`, `Client has started, with ${client.users.cache.size} user(s) in ${client.guilds.cache.size} guild(s).`);
    logHeader();

    await refreshActivity(client);
    await updateLeaderboard();

    setInterval(() => { void refreshActivity(client); }, config.cooldowns.utils.refreshActivity);
    setInterval(() => updateLeaderboard, config.cooldowns.utils.updateLeaderboard);
};
