const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `ban`,
    description: `Ban a user.`,
    usage: `<user> [reason]`
}

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.channel.send(`${message.author} You're not allowed to use that!`);

    let banMember = message.mentions.members.first();
    if (!banMember) return message.channel.send(`${message.author} Please specify a valid member of this server!`);
    if (!banMember.bannable) return message.channel.send(`${message.author} That user is a mod / admin.`);

    let banReason = args.slice(1).join(` `);
    if (!banReason) banReason = `No reason provided.`;

    banMember.send(`You were banned from **${message.guild.name}**for **${banReason}**.`).catch(err => console.log(err));

    // await banMember.ban(banReason).catch(err => {
    //   message.channel.send(`Failed to kick ${banMember}.`);
    //   console.log(err);
    // });

    message.channel.send(`**${banMember.user.username}** was banned: **${banReason}**`);
    message.delete();
}