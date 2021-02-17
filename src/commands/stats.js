const Discord = require(`discord.js`);
const User = require(`../models/user.model.js`);

const config = require(`../../config/config.js`);
const getTornUsers = require(`../api.js`);

module.exports = {
    desc: `View user stats.`,
    usage: `[user]`
};

module.exports.run = async (client, message, args) => {
    const m = `${message.author} »`;
    const tornUsers = await getTornUsers();

    const discUser = message.mentions.members.first() || args[0];
    const discordUser = client.users.get(discUser);

    const dbUser = await User.findOne({ discordID: discordUser.id });
    if (!dbUser) return message.channel.send(`${m} That user does not have an account!`);

    const tornUser = tornUsers.find(username => username === dbUser.accountName);
    const sEmbed = new Discord.RichEmbed()
        .setAuthor(`#${tornUser.placement} | ${tornUser.displayName}`, client.user.avatarURL)
        .setColor(tornUser.team === `Green` ? 0x32cd32 : tornUser.team === `Alien` ? 0xffc0cb : tornUser.team === `Human` ? 0x00b7eb : 0x00000)
        .setDescription(`**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.experience}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    return message.channel.send(sEmbed);
};
