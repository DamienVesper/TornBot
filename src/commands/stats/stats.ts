import config from '../../../config/config';

import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

// import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';

const cmd: Omit<SlashCommandBuilder, `addSubcommand` | `addSubcommandGroup`> = new SlashCommandBuilder()
    .setName(`stats`)
    .setDescription(`View user stats.`)
    .addStringOption(option => option.setName(`account`).setDescription(`The account you want to view.`));

const run = async (client: Client, interaction: Discord.CommandInteraction) => {
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const username = interaction.options.getString(`account`).toLowerCase();

    const tornUser: TornAccount = tornUsers.get(username);
    if (!tornUser) return await interaction.reply({ content: `You must specify a user!`, ephemeral: true });

    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setAuthor({
            name: `#${tornUser.spot} | ${username}`,
            iconURL: client.user.avatarURL(),
            url: `https://torn.space/leaderboard/`
        })
        .setColor(config.colors.teams[tornUser.team])
        .setDescription(`This user has an ELO of ${tornUser.elo}. \n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    await interaction.reply({ embeds: [sEmbed] });
};

export {
    cmd,
    run
};
