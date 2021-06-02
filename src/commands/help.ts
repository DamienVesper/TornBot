import config from '../../config/config';

import * as Discord from 'discord.js';
import { Client, CommandConfig } from '../types/discord';

const cmd: CommandConfig = {
    desc: `View all commands.`,
    aliases: [`h`, `?`]
};

const run = async (client: Client, message: Discord.Message, args: any[]) => {
    const m: String = `${message.author} »`;

    const commands = client.commands;
    const data = [];

    if (!args[0]) {
        let helpTxt = ``;
        commands.forEach(cmd => {
            helpTxt += `\`${config.prefix + cmd.name + (cmd.config.usage ? ` ${cmd.config.usage}` : ``)}\` - ${cmd.config.desc}\n`;
        });

        const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
            .setColor(config.colors.info)
            .setAuthor(`Help Menu`)
            .setDescription(helpTxt)
            .setTimestamp(new Date())
            .setFooter(config.footer);
        return message.channel.send(sEmbed);
    }

    const commandName = args[0].toLowerCase();
    const command = commands.find(command => command.name === commandName) || commands.find(c => c.config.aliases && c.config.aliases.includes(commandName));

    if (!command) return message.channel.send(`${m} That is not a valid command!`);

    if (command.config.usage) data.push(`**Usage:** \`${config.prefix}${command.name} ${command.config.usage}\``);
    if (command.config.aliases) data.push(`**Aliases:** ${command.config.aliases.join(`, `)}`);

    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setColor(config.colors.info)
        .setAuthor(`Help Menu | ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`)
        .setDescription(`${command.config.desc}\n\n${data.join(`\n`)}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
};

export {
    cmd,
    run
};
