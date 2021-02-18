const User = require(`../models/user.model.js`);

module.exports = {
    desc: `Unlink your Torn account from Discord.`
};

module.exports.run = async (client, message, args) => {
    const m = `${message.author} »`;

    const account = await User.findOne({ discordID: message.author.id });
    if (!account) return message.channel.send(`${m} You are not linked to an account!`);

    User.deleteOne({ discordID: message.author.id })
        .catch(() => message.channel.send(`${m} Failed to unlink your account. Please contact a developer.`))
        .then(() => message.channel.send(`${m} Succesfully unlinked your account.`));
};
