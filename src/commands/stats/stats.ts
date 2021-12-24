import config from '../../../config/config';

import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

import getQuery from '../../utils/getQuery';

import { Client } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';

const cmd: Omit<SlashCommandBuilder, `addSubcommand` | `addSubcommandGroup`> = new SlashCommandBuilder()
    .setName(`stats`)
    .setDescription(`View user stats.`)
    .addStringOption(option => option.setName(`user`).setDescription(`The account you want to view.`));

const run = async (client: Client, interaction: Discord.CommandInteraction) => {
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const query = getQuery(message, args);

    const dbUser = await User.findOne(query);
    const username = dbUser?.accountName || args[0];

    const tornUser: TornAccount = tornUsers.get(username);
    if (!tornUser) return message.reply(`That user does not exist!`);

    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setAuthor(`#${tornUser.spot} | ${username}`, client.user.avatarURL())
        .setColor(config.colors.teams[tornUser.team])
        .setDescription(`This user has an ELO of ${tornUser.elo}. \n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    message.reply({ embeds: [sEmbed] });
};

export {
    cmd,
    run
};
