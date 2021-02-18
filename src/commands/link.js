const User = require(`../models/user.model.js`);

const getTornUsers = require(`../utils/getTornUsers.js`);

module.exports = {
    desc: `Link your Torn account to Discord.`,
    usage: `<user>`
};

module.exports.run = async (client, message, args) => {
    const m = `${message.author} »`;
    const tornUsers = await getTornUsers();

    const userToLink = args[0].toString().toLowerCase();

    const userIsRegistered = await User.findOne({ discordID: message.author.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered) return message.channel.send(`${m} You are already linked to an account!`);
    else if (accountIsRegistered) return message.channel.send(`${m} That account has already been registered!`);
    else if (!tornUsers.find(user => user.username === userToLink)) return message.channel.send(`${m} That account does not exist!`);

    const user = new User({
        banned: false,
        creationDate: new Date(),
        accountName: userToLink,
        discordID: message.author.id
    });
    user.save(() => message.channel.send(`${m} You are now linked to account \`${userToLink}\`.`));
};
