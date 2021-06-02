import * as Discord from 'discord.js';
import { Client } from '../types/discord';

import config from '../../config/config';
import User from '../models/user.model';

import log from '../utils/log';

export default async (client: Client, message: Discord.Message) => {
    const m = `${message.author} »`;

    // Botception and prefix handling.
    if (message.author.bot || message.channel.type === `dm`) return;
    if (message.content.slice(0, config.prefix.length).toString().toLowerCase() !== config.prefix) return;

    // Parse arguments and command.
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command from the handler.
    const cmd = client.commands.find(cmd => cmd.name === command || (cmd.config.aliases && cmd.config.aliases.includes(command)));
    if (!cmd) return;

    if ((cmd.config.usage) && args.length < (cmd.config.usage.split(`<`).length) - 1) return message.channel.send(`${m} Proper usage is \`${config.prefix + cmd.name} ${cmd.config.usage}\`.`);
    else {
        const user = await User.findOne({ discordID: message.author.id });
        if (user && user.banned) {
            log(`yellow`, `${message.author.tag} attempted to run ${command} in ${message.guild.name} but is blacklisted.`);
            return message.channel.send(`${m} You are currently banned from the bot!`);
        }

        // Execute the command.
        log(`magenta`, `${message.author.tag} [${message.author.id}] ran command ${command} in ${message.guild.name}.`);
        cmd.run(client, message, args);
    }
};
