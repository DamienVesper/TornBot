import config from '../../config/config';

import * as Discord from 'discord.js';
import { Client } from '../index';

export default {
    desc: `View the wiki.`
};

export const run = async (client: Client, message: Discord.Message, args: any[]) => {
    const sEmbed = new Discord.MessageEmbed()
        .setColor(config.colors.purple)
        .setAuthor(`Torn.Space Wiki`, message.author.avatarURL(), `https://tornspace.fandom.com`)
        .setDescription(`Click [here](https://tornspace.fandom.com) to view the Torn.Space wiki.`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
};
