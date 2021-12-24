import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';

const cmd: Omit<SlashCommandBuilder, `addSubcommand` | `addSubcommandGroup`> = new SlashCommandBuilder()
    .setName(`link`)
    .setDescription(`Link your Torn account to Discord.`)
    .addStringOption(option => option.setName(`account`).setDescription(`The account you want to link.`));

const run = async (client: Client, interaction: Discord.CommandInteraction) => {
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const userToLink = interaction.options.getString(`account`).toLowerCase();

    const userIsRegistered = await User.findOne({ discordID: interaction.user.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered) return interaction.reply({ content: `You are already linked to an account!`, ephemeral: true });
    else if (accountIsRegistered) return interaction.reply({ content: `That account has already been registered!`, ephemeral: true });
    else if (!tornUsers.get(userToLink)) return interaction.reply({ content: `That account does not exist!`, ephemeral: true });

    const user = new User({
        accountName: userToLink,
        discordID: interaction.user.id
    });

    user.save(() => interaction.reply(`You are now linked to account \`${userToLink}\`.`));
};

export {
    cmd,
    run
};
