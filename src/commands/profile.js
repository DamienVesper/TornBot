const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `profile`,
    description: `View a user's profile.`,
    usage: `[user::mention]`
};

module.exports.run = async (client, message, args) => {
    const getUsers = await require(`../api.js`);
    const user = null;

    const tornUser = getUsers[user];
    const sEmbed = new Discord.RichEmbed()
        .setAuthor(`#${tornUser.placement} | ${tornUser.displayName}`)
        .setDescription(`
            Rank: ${tornUser.rank}
            Experience: ${tornUser.experience}
            Kills: ${tornUser.kills}

            Money: ${tornUser.money}
            Stats: ${tornUsers.stats}
        `)
        .setTimestamp(new Date())
        .setFooter(config.footer);
};
