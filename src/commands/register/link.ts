import { SlashCommandBuilder } from '@discordjs/builders';
import type { ChatInputCommandInteraction } from 'discord.js';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import type { Client } from '../../typings/discord';

const cmd = new SlashCommandBuilder()
    .setName(`link`)
    .setDescription(`Link your Torn account to Discord.`)
    .addStringOption(option => option.setName(`account`).setDescription(`The account you want to link.`).setRequired(true));

const run = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
    const tornUsers = (await Leaderboard.findOne())?.accounts;
    if (tornUsers === undefined) {
        await interaction.followUp({ content: `The leaderboard is currently updating. Please try again later.`, ephemeral: true });
        return;
    }

    const userToLink = (interaction.options.getString(`account`) as string).toLowerCase();
    await interaction.deferReply();

    const userIsRegistered = await User.findOne({ discordID: interaction.user.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered != null) {
        await interaction.followUp({ content: `You are already linked to an account!`, ephemeral: true });
        return;
    } else if (accountIsRegistered != null) {
        await interaction.followUp({ content: `That account has already been registered!`, ephemeral: true });
        return;
    } else if (tornUsers.get(userToLink) == null) {
        await interaction.followUp({ content: `That account does not exist!`, ephemeral: true });
        return;
    }

    const user = new User({
        creationDate: new Date().toString(),
        accountName: userToLink,
        discordID: interaction.user.id
    });

    await user.save();
    await interaction.followUp(`You are now linked to account \`${userToLink}\`.`);
};

export {
    cmd,
    run
};
