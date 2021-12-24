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

    User.deleteOne({ discordID: interaction.user.id })
        .catch(() => interaction.reply(`Failed to unlink your account. Please contact a developer.`))
        .then(() => interaction.reply(`Succesfully unlinked your account.`));
};

export {
    cmd,
    run
};
