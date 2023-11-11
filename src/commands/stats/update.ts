import config from '../../../config/config';

import { SlashCommandBuilder } from '@discordjs/builders';
import type { ChatInputCommandInteraction } from 'discord.js';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import updateRoles from '../../utils/updateRoles';

import type { Client } from '../../typings/discord';
import type { TornAccount } from '../../typings/accounts';
import type { LeaderboardDoc } from '../../typings/models';

const cmd = new SlashCommandBuilder()
    .setName(`update`)
    .setDescription(`Update your roles.`);

const run = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
    if (interaction.guild?.id !== config.guild) {
        await interaction.reply({ content: `This command can only be ran in the official Torn.Space server!`, ephemeral: true });
        return;
    }

    await interaction.deferReply();

    const tornUsers: Map<string, TornAccount> = ((await Leaderboard.findOne()) as LeaderboardDoc)?.accounts;
    const dbUser = await User.findOne({ discordID: interaction.user.id });
    if (dbUser == null) {
        await interaction.followUp({ content: `You don't have an account yet!`, ephemeral: true });
        return;
    }

    await updateRoles(await interaction.guild?.members.fetch(interaction.user.id), dbUser.accountName, tornUsers);
    await interaction.followUp({ content: `Your roles have been updated!` });
};

export {
    cmd,
    run
};
