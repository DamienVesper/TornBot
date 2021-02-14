const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `unlink`,
    description: `Unlink your Torn account from that of your Discord.`,
    usage: null
};

module.exports.run = async (client, message, args) => {
    if (message.author.id == `448619102198693889`) return;

    const account = await User.findOne({
        discordID: message.author.id
    });
    if (!account) return message.channel.send(`${message.author} You are not linked to an account!`);

    User.deleteOne({
        discordID: message.author.id
    })
        .catch(err => message.channel.send(`${message.author} Failed to unlink your account. Please contact a developer.`))
        .then(() => message.channel.send(`${message.author} Succesfully unlinked your account.`));
};
