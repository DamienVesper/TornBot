const Discord = require(`discord.js`);

module.exports = {
    desc: `View user stats.`,
    usage: `[user]`
};

module.exports.run = async (client, message, args) => {
    const getTornUsers = await require(`../api.js`);
};
