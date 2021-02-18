const Discord = require(`discord.js`);
const User = require(`../models/user.model.js`);

const config = require(`../../config/config.js`);
const getTornUsers = require(`../utils/getTornUsers.js`);

module.exports = {
    desc: `View user stats.`,
    usage: `[user]`
};

module.exports.run = async (client, message, args) => {
    const tornUsers = await getTornUsers();

    const discUser = message.mentions.members.first() || args[0] || message.member.id;
    const discordUser = client.users.get(discUser);

    const dbUser = discordUser ? await User.findOne({ discordID: discordUser.id }) : undefined;
    const tornUser = tornUsers.find(user => user.username === (dbUser ? dbUser.accountName : discUser));

    const sEmbed = new Discord.RichEmbed()
        .setAuthor(`#${tornUser.placement} | ${tornUser.displayName}`, client.user.avatarURL)
        .setColor(tornUser.team === `Cyborg` ? 0x32cd32 : tornUser.team === `Alien` ? 0xffc0cb : tornUser.team === `Human` ? 0x00b7eb : 0x00000)
        .setDescription(`**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    return message.channel.send(sEmbed);
};
