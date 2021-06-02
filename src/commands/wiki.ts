import * as Discord from 'discord.js';
import config from '../../config/config';

import { Client, CommandConfig } from '../types/discord';

const cmd: CommandConfig = {
    desc: `View the wiki.`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setColor(config.colors.purple)
        .setAuthor(`Torn.Space Wiki`, message.author.avatarURL(), `https://tornspace.fandom.com`)
        .setDescription(`Click [here](https://tornspace.fandom.com) to view the Torn.Space wiki.`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
};

export {
    cmd,
    run
};
