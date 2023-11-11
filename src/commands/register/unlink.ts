import { SlashCommandBuilder } from '@discordjs/builders';
import type { ChatInputCommandInteraction } from 'discord.js';

import User from '../../models/user.model';

import type { Client } from '../../typings/discord';

const cmd = new SlashCommandBuilder()
    .setName(`unlink`)
    .setDescription(`Unlink your Torn account from Discord.`);

const run = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
    const account = await User.findOne({ discordID: interaction.user.id });
    if (account === undefined) {
        await interaction.reply({ content: `You are not linked to an account!`, ephemeral: true });
        return;
    }

    await interaction.deferReply();

    await User.deleteOne({ discordID: interaction.user.id })
        .catch(async () => await interaction.followUp(`Failed to unlink your account. Please contact a developer.`))
        .then(async () => await interaction.followUp(`Succesfully unlinked your account.`));
};

export {
    cmd,
    run
};
