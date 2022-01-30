import config from '../../../config/config';

import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import { Client } from '../../typings/discord';

const cmd: SlashCommandBuilder = new SlashCommandBuilder()
    .setName(`wiki`)
    .setDescription(`View the wiki.`);

const run = async (client: Client, interaction: Discord.CommandInteraction): Promise<void> => {
    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setColor(config.colors.purple)
        .setAuthor({
            name: `Torn.Space Wiki`,
            iconURL: (client.user?.avatarURL() as string),
            url: `https://tornspace.fandom.com`
        })
        .setDescription(`Click [here](https://tornspace.fandom.com) to view the Torn.Space wiki.`)
        .setTimestamp()
        .setFooter({ text: config.footer });

    await interaction.reply({ embeds: [sEmbed] });
};

export {
    cmd,
    run
};
