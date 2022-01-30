import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';
import { LeaderboardDoc } from '../../typings/models';

const cmd: Omit<SlashCommandBuilder, `addSubcommand` | `addSubcommandGroup`> = new SlashCommandBuilder()
    .setName(`link`)
    .setDescription(`Link your Torn account to Discord.`)
    .addStringOption(option => option.setName(`account`).setDescription(`The account you want to link.`).setRequired(true));

const run = async (client: Client, interaction: Discord.CommandInteraction): Promise<void> => {
    const tornUsers: Map<string, TornAccount> = ((await Leaderboard.findOne()) as LeaderboardDoc)?.accounts;

    const userToLink = (interaction.options.getString(`account`) as string).toLowerCase();

    const userIsRegistered = await User.findOne({ discordID: interaction.user.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered != null) return await interaction.reply({ content: `You are already linked to an account!`, ephemeral: true });
    else if (accountIsRegistered != null) return await interaction.reply({ content: `That account has already been registered!`, ephemeral: true });
    else if (tornUsers.get(userToLink) == null) return await interaction.reply({ content: `That account does not exist!`, ephemeral: true });

    const user = new User({
        creationDate: new Date().toString(),
        accountName: userToLink,
        discordID: interaction.user.id
    });

    user.save(() => {
        void interaction.reply(`You are now linked to account \`${userToLink}\`.`);
    });
};

export {
    cmd,
    run
};
