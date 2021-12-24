import { Client } from '../typings/discord';
import log from '../utils/log';

/**
 * Refresh the activity of the client.
 * @param client The Discord client to use.
 */
const refreshActivity = async (client: Client): Promise<void> => {
    log(`cyan`, `Updating status...`);

    client?.user?.setPresence({
        activities: [{
            name: `Torn.Space`,
            type: `WATCHING`
        }],

        status: `online`
    });

    log(`green`, `Status updated.`);
};

export default refreshActivity;
