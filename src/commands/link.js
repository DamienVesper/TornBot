const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `link`,
    description: `Link your Torn account to that of Discord.`,
    usage: `<torn_username>`
}

module.exports.run = async (client, message, args) => {
    const tornUsers = await require(`../api.js`);
    const tornUser = args[0].toString().toLowerCase();

    const accountRegistered = await User.findOne({
        accountName: args[0]
    });
    const userRegistered = await User.findOne({
        discordID: message.author.id
    });

    if (accountRegistered) return message.channel.send(`${message.author} That account is already in use!`);
    else if (userRegistered) return message.channel.send(`${message.author} You are already linked to an account!`);
    else if (!tornUsers[tornUser]) return message.channel.send(`${message.author} That account either doesn't exist or isn't ranked yet!`);

    const user = new User({
        banned: false,
        created: new Date(),
        accountName: tornUser,
        discordID: message.author.id,
        discordTag: message.author.tag
    });
    user.save(err => err ? message.channel.send(`${message.author} Failed to create your account.`) : message.channel.send(`${message.author} You are now linked to account \`${args[0]}\`.`));
}