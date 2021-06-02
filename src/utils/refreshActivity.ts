import { Client } from '../types/discord';
import log from '../utils/log';

const refreshActivity = async (client: Client, callback?: any) => {
    log(`cyan`, `Updating status...`);

    await client.user.setPresence({
        activity: {
            name: `${client.users.cache.size} players on Torn.Space`,
            type: `WATCHING`
        },

        status: `online`
    });

    log(`green`, `Status updated.`);
    if (callback !== undefined) callback();
};

export default refreshActivity;
