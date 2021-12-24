import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import updateRoles from '../../utils/updateRoles';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';

const cmd: SlashCommandBuilder = new SlashCommandBuilder()
    .setName(`update`)
    .setDescription(`Update your roles.`);

const run = async (client: Client, interaction: Discord.CommandInteraction) => {
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const dbUser = await User.findOne({ discordID: interaction.user.id });
    if (!dbUser) return interaction.reply({ content: `You don't have an account yet!`, ephemeral: true });

    interaction.reply({ content: `Updating roles...`, ephemeral: true });
    await updateRoles((await interaction.guild.members.fetch(interaction.user.id)), dbUser.accountName, tornUsers);
};

export {
    cmd,
    run
};
