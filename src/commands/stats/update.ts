import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import updateRoles from '../../utils/updateRoles';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';
import { LeaderboardDoc } from '../../typings/models';

const cmd: SlashCommandBuilder = new SlashCommandBuilder()
    .setName(`update`)
    .setDescription(`Update your roles.`);

const run = async (client: Client, interaction: Discord.CommandInteraction): Promise<void> => {
    if (interaction.guild?.id !== process.env.GUILD_ID) return await interaction.reply({ content: `This command can only be ran in the official Torn.Space server!`, ephemeral: true });

    const tornUsers: Map<string, TornAccount> = ((await Leaderboard.findOne()) as LeaderboardDoc)?.accounts;

    const dbUser = await User.findOne({ discordID: interaction.user.id });
    if (dbUser == null) return await interaction.reply({ content: `You don't have an account yet!`, ephemeral: true });

    await interaction.reply({ content: `Updating roles...`, ephemeral: true });
    await updateRoles((await (interaction.guild as Discord.Guild)?.members.fetch(interaction.user.id)), dbUser.accountName, tornUsers);
};

export {
    cmd,
    run
};
