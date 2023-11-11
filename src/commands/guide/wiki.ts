import config from '../../../config/config';

import { SlashCommandBuilder } from '@discordjs/builders';
import {
    type ChatInputCommandInteraction,
    EmbedBuilder
} from 'discord.js';

import type { Client } from '../../typings/discord';

const cmd = new SlashCommandBuilder()
    .setName(`wiki`)
    .setDescription(`View the wiki.`);

const run = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
    if (interaction.guild?.rulesChannel === null) return;

    const sEmbed = new EmbedBuilder()
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
