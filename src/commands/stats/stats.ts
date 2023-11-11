import config from '../../../config/config';

import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';
import type { ChatInputCommandInteraction } from 'discord.js';

import Leaderboard from '../../models/leaderboard.model';

import type { Client } from '../../typings/discord';
import type { TornAccount } from '../../typings/accounts';
import type { LeaderboardDoc } from '../../typings/models';

import getQuery from '../../utils/getQuery';

const cmd = new SlashCommandBuilder()
    .setName(`stats`)
    .setDescription(`View user stats.`)
    .addStringOption(option => option.setName(`account`).setDescription(`The account you want to view.`));

const run = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
    const tornUsers: Map<string, TornAccount> = ((await Leaderboard.findOne()) as LeaderboardDoc)?.accounts;

    const username = await getQuery(interaction, interaction.options.getString(`account`)?.toLowerCase());
    if (username === undefined) {
        await interaction.reply({ content: `You must either link an account or specify a user!`, ephemeral: true });
        return;
    }

    await interaction.deferReply();

    const tornUser: TornAccount | undefined = tornUsers.get(username);
    if (tornUser === undefined) {
        await interaction.followUp({ content: `That user does not exist!`, ephemeral: true });
        return;
    }

    const sEmbed = new EmbedBuilder()
        .setAuthor({
            name: `#${tornUser.spot} | ${username}`,
            iconURL: (client.user?.avatarURL() as string),
            url: `https://torn.space/leaderboard/`
        })
        .setColor(config.colors.teams[tornUser.team])
        .setDescription(`This user has an ELO of ${tornUser.elo}. \n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp()
        .setFooter({ text: config.footer });

    await interaction.followUp({ embeds: [sEmbed] });
};

export {
    cmd,
    run
};
