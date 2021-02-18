const config = require(`../../config/config.js`);
const User = require(`../models/user.model.js`);
const updateRoles = require(`../utils/updateRoles.js`);
const getTornUsers = require(`../utils/getTornUsers.js`);
const log = require(`../utils/log.js`);

module.exports = {
    desc: `Dev commands I guess...`
};

module.exports.run = async (client, message, args) => {
    const tornUsers = await getTornUsers();
    const m = `${message.author} »`;

    if (message.author.id !== config.developerID) return message.channel.send(`${m} You are not allowed to use that!`);

    const subCommand = args.shift();
    if (subCommand === `updateall`) {
        const dbUsers = await User.find({});
        for (const dbUser of dbUsers) {
            const discordMember = message.guild.members.get(dbUser.discordID);

            if (!discordMember) return log(`cyan`, `User not found in Discord, skipping...`);
            updateRoles(client, discordMember, dbUser.accountName, tornUsers);
        }
        return message.channel.send(`${m} Updating roles for ${dbUsers.length} users.`);
    }
};
