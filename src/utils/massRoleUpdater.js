const User = require(`../models/user.model.js`);

const config = require(`../../config/config.js`);

const updateRoles = require(`./updateRoles.js`);
const getTornUsers = require(`./getTornUsers.js`);
const log = require(`./log.js`);

module.exports = async client => {
    const tornUsers = await getTornUsers();
    log(`cyan`, `Automatically updating roles for all users...`);

    const channel = client.channels.get(config.botChannel);
    channel.send(`Updating roles...`);

    let updateUserCount = 0;

    const dbUsers = await User.find({});
    for (const dbUser of dbUsers) {
        const discordMember = channel.guild.members.get(dbUser.discordID);
        const tornUser = tornUsers.find(user => user.username === dbUser.accountName);

        if (!discordMember || !tornUser) dbUser.delete();
        else {
            updateRoles(client, discordMember, dbUser.accountName, tornUsers);
            updateUserCount++;
        }
    }

    channel.send(`Updated roles for ${updateUserCount} players.`);
    log(`blue`, `Updated roles for ${updateUserCount} users...`);
};
