const config = require(`../../config/config.js`);
const log = require(`../utils/log.js`);

const User = require(`../models/user.model.js`);

module.exports = async (client, message) => {
    const m = `${message.author} »`;

    // Botception and prefix handling.
    if (message.author.bot || message.channel.type === `dm`) return;
    if (message.content.slice(0, config.prefix.length).toString().toLowerCase() !== config.prefix) return;

    // Parse arguments and command.
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command from the handler and run it.
    const cmd = client.commands.find(cmd => cmd.name === command || (cmd.aliases && cmd.aliases.includes(command)));
    if (!cmd) return;

    if ((cmd.usage) && args.length < (cmd.usage.split(`<`).length) - 1) return message.channel.send(`${m} Proper usage is \`${config.prefix + cmd.name} ${cmd.usage}\`.`);
    else {
            const userIsBanned = await User.findOne({
                discordID: message.author.id,
                banned: true
            });

            if (userIsBanned) {
                log(`cyan`, `${message.author.tag} attempted to run ${command} in ${message.guild.name} but is blacklisted.`);
                return message.channel.send(`${m} You are currently banned from the bot!`);
            }
            log(`magenta`, `${message.author.tag} ran command ${command} in ${message.guild.name}.`);
            cmd.run(client, message, args);
    }
};
