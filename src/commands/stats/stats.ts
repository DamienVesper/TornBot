import config from '../../../config/config';

import * as Discord from 'discord.js-light';
import { Client, CommandConfig } from '../../types/discord';

import getQuery from '../../utils/getQuery';
import { TornAccount } from '../../types/accounts';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

const cmd: CommandConfig = {
    desc: `View user stats.`,
    usage: `[user]`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const m = `${message.author} »`;

    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const query = getQuery(message, args);

    const dbUser = await User.findOne(query);
    const username = dbUser?.accountName || args[0];

    const tornUser: TornAccount = tornUsers.get(username);
    if (!tornUser) return message.channel.send(`${m} That user does not exist!`);

    const sEmbed: Discord.MessageEmbed = new Discord.MessageEmbed()
        .setAuthor(`#${tornUser.spot} | ${username}`, client.user.avatarURL())
        .setColor(config.colors.teams[tornUser.team])
        .setDescription(`This user has an ELO of ${tornUser.elo}. \n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    message.channel.send(sEmbed);
};

export {
    cmd,
    run
};
