const log = require(`../utils/log.js`);
const logHeader = require(`../utils/logHeader.js`);
const updateAllUsers = require(`../utils/massRoleUpdater.js`);

module.exports = client => {
    log(`green`, `${client.user.username}#${client.user.discriminator} has started, with ${client.users.size} users in ${client.guilds.size} servers.`);
    logHeader();

    client.user.setPresence({
        game: {
            name: `${client.users.size} players in Torn.Space`,
            type: `WATCHING`
        },
        status: `dnd`
    });

    // Update all users' roles periodically.
    setInterval(() => updateAllUsers(client), 15e5);
    updateAllUsers(client);
};
