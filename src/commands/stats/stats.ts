import config from '../../../config/config';

import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import Leaderboard from '../../models/leaderboard.model';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';
import { LeaderboardDoc } from '../../typings/models';

import getQuery from '../../utils/getQuery';

const cmd: Omit<SlashCommandBuilder, `addSubcommand` | `addSubcommandGroup`> = new SlashCommandBuilder()
    .setName(`stats`)
    .setDescription(`View user stats.`)
    .addStringOption(option => option.setName(`account`).setDescription(`The account you want to view.`));

const run = async (client: Client, interaction: Discord.CommandInteraction): Promise<void> => {
    const tornUsers: Map<string, TornAccount> = ((await Leaderboard.findOne()) as LeaderboardDoc)?.accounts;

    const username = await getQuery(interaction, interaction.options.getString(`account`)?.toLowerCase());
    if (username === undefined) return await interaction.reply({ content: `You must either link an account or specify a user!`, ephemeral: true });

    const tornUser: TornAccount | undefined = tornUsers.get(username);
    if (tornUser === undefined) return await interaction.reply({ content: `That user does not exist!`, ephemeral: true });

    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setAuthor({
            name: `#${tornUser.spot} | ${username}`,
            iconURL: (client?.user?.avatarURL() as string),
            url: `https://torn.space/leaderboard/`
        })
        .setColor(config.colors.teams[tornUser.team])
        .setDescription(`This user has an ELO of ${tornUser.elo}. \n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter({ text: config.footer });

    await interaction.reply({ embeds: [sEmbed] });
};

export {
    cmd,
    run
};
