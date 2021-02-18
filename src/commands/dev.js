const config = require(`../../config/config.js`);
const User = require(`../models/user.model.js`);
const updateRoles = require(`../utils/updateRoles.js`);
const getTornUsers = require(`../utils/getTornUsers.js`);
const log = require(`../utils/log.js`);

module.exports = {
    desc: `Dev commands I guess...`
};

module.exports.run = async (client, message, args) => {
    const tornUsers = await getTornUsers();
    const m = `${message.author} »`;

    if (message.author.id !== config.developerID) return message.channel.send(`${m} You are not allowed to use that!`);

    const subCommand = args.shift();
    if (subCommand === `updateall`) {
        const dbUsers = await User.find({});
        dbUsers.forEach((dbUser, i) => {
            setTimeout(() => {
                const discordMember = message.guild.members.get(dbUser.discordID);

                if (!discordMember) log(`cyan`, `User not found in Discord, skipping...`);
                else updateRoles(client, discordMember, dbUser.accountName, tornUsers);
            }, 2e3 * i);
        });
        message.channel.send(`${m} Updating roles for ${dbUsers.length} users.`);
    }
    else if (subCommand === `registerall`) {
        message.channel.send(`${m} Registering users...`);
        message.guild.members.forEach(async member => {
            const discUser = client.users.get(member.user.id);
            if (!discUser) return;

            const tornUser = tornUsers.find(user => user.username === discUser.username.toLowerCase());
            const userAlreadyExists = await User.findOne({ discordID: member.user.id });

            if (!tornUser) log(`cyan`, `Torn account "${discUser.username}" not found in Discord, skipping...`);
            else if (userAlreadyExists) log(`cyan`, `User "${discUser.username} already exists, skipping...`);
            else {
                const dbUser = new User({
                    banned: false,
                    creationDate: new Date(),
                    accountName: discUser.username.toLowerCase(),
                    discordID: discUser.id
                });
                dbUser.save(() => log(`blue`, `Created user account for ${discUser.username}.`));
            }
        });
    }
};
