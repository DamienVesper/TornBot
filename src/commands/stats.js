const Discord = require(`discord.js`);
const User = require(`../models/user.model.js`);
const getTornUsers = require(`../api.js`);

module.exports = {
    desc: `View user stats.`,
    usage: `[user]`
};

module.exports.run = async (client, message, args) => {
    const tornUsers = await getTornUsers();

    let discUser;
    if (args[0]) discUser = message.mentions.members.first() || args[0] || client.users.get(discUser);
};
