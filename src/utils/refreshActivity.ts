import { Client } from '../index';

export const refreshActivity = (client: Client) => {
    client.user.setPresence({
        activity: {
            name: `${client.users.cache.size} players on Torn.Space`,
            type: `WATCHING`
        },
        status: `dnd`
    });
};
