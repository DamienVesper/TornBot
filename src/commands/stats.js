const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `stats`,
    description: `View user stats.`,
    usage: `[user]`
}

module.exports.run = async (client, message, args) => {
    const tornUsers = await require(`../api.js`);

    let discUser;
    if (args[0]) {
        discUser = message.mentions.members.first();
        if (!discUser) {
            discUser = args[0];
            if (isNaN(parseInt(discUser))) return message.channel.send(`${message.author} That is an invalid user ID!`);
            discUser = client.users.get(discUser);
        } else discUser = discUser.user;
    } else discUser = message.author;

    const dbUser = await User.findOne({
        discordID: discUser.id
    });
    if (!dbUser) return message.channel.send(`${message.author} That user is not linked to an account!`);

    const tornUserObj = tornUsers[dbUser.accountName];
    let sEmbed = new Discord.RichEmbed()
        .setAuthor(`#${tornUserObj.placement} | ${tornUserObj.displayName}`, client.user.avatarURL)
        .setColor(tornUserObj.team == `Green` ? 0x32cd32 : tornUserObj.team == `Alien` ? 0xffc0cb : tornUserObj.team == `Human` ? 0x00b7eb : 0x00000)
        .setDescription(`
            **Rank**: ${tornUserObj.rank}
            **Experience**: ${tornUserObj.experience}
            **Kills**: ${tornUserObj.kills}

            **Money**:  ${tornUserObj.money}
            **Tech**: ${tornUserObj.tech}
        `)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    message.channel.send(sEmbed);
}