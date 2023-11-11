import { ActivityType, PresenceUpdateStatus } from 'discord.js';

import log from '../utils/log';

import type { Client } from '../typings/discord';

/**
 * Refresh the activity of the client.
 * @param client The Discord client to use.
 */
const refreshActivity = async (client: Client): Promise<void> => {
    client.user?.setPresence({
        activities: [{
            name: `Torn.Space`,
            type: ActivityType.Watching
        }],

        status: PresenceUpdateStatus.Online
    });

    log(`green`, `Status updated.`);
};

export default refreshActivity;
