import { Client } from '../typings/discord';

import log from '../utils/log';
import { logHeader } from '../utils/logExtra';

import refreshActivity from '../utils/refreshActivity';
import updateLeaderboard from '../modules/updateLeaderboard';

export default {
    name: `ready`,
    run: async (client: Client) => {
        log(`green`, `Client has started, with ${client.users.cache.size} user(s) in ${client.guilds.cache.size} guild(s).`);
        logHeader();

        await refreshActivity(client);
        await updateLeaderboard();

        setInterval(async () => (await refreshActivity(client)), 6e5);
        setInterval(async () => (await updateLeaderboard()), 15e5);
    }
};
