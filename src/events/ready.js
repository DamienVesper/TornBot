const log = require(`../utils/log.js`);

module.exports = client => {
    log(`green`, `${client.user.username}#${client.user.discriminator} has started, with ${client.users.size} users in ${client.guilds.size} servers.`);
};
