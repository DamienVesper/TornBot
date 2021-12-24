import config from '../../../config/config';

import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import User from '../../models/user.model';

import { Client } from '../../typings/discord';

const cmd: SlashCommandBuilder = new SlashCommandBuilder()
    .setName(`unlink`)
    .setDescription(`Unlink your Torn account from Discord.`);

const run = async (client: Client, interaction: Discord.CommandInteraction) => {
    const account = await User.findOne({ discordID: interaction.user.id });
    if (!account) return interaction.reply({ content: `You are not linked to an account!`, ephemeral: true });

    const sRow = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton().setCustomId(`confirmation-yes`).setLabel(`Delete`).setStyle(`DANGER`),
        new Discord.MessageButton().setCustomId(`confirmation-no`).setLabel(`Keep`).setStyle(`PRIMARY`)
    );

    const sEmbed = new Discord.MessageEmbed()
        .setColor(0x1e90ff)
        .setAuthor(`Are you sure you want to do this?`)
        .setDescription(`By confirming, you are agreeing to destroy all your data within the application.`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    await interaction.reply({ embeds: [sEmbed], components: [sRow] });

    const collector = interaction.channel.createMessageComponentCollector({ filter: , time: 15000 });

    User.deleteOne({ discordID: interaction.user.id })
        .catch(() => interaction.reply(`Failed to unlink your account. Please contact a developer.`))
        .then(() => interaction.reply(`Succesfully unlinked your account.`));
};

export {
    cmd,
    run
};
