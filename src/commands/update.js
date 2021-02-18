const User = require(`../models/user.model.js`);
const updateRoles = require(`../utils/updateRoles.js`);
const getTornUsers = require(`../utils/getTornUsers.js`);

module.exports = {
    desc: `Update your roles.`
};

module.exports.run = async (client, message, args) => {
    const tornUsers = await getTornUsers();
    const m = `${message.author} »`;

    const dbUser = await User.findOne({ discordID: message.author.id });
    if (!dbUser) return message.channel.send(`${m} You don't have an account yet!`);

    updateRoles(client, message.member, dbUser.accountName, tornUsers);
    message.channel.send(`${m} Updating roles...`);
};
