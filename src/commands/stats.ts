import config from '../../config/config';

import * as Discord from 'discord.js';
import { Client, CommandConfig } from '../types/discord';
import { tornAccount } from '../types/account';

import User from '../models/user.model';
import getTornUsers from '../utils/getTornUsers';

const cmd: CommandConfig = {
    desc: `View user stats.`,
    usage: `[user]`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const m = `${message.author} »`;

    const tornUsers = await getTornUsers();

    const discUser = message.mentions.members.first()?.id || args[0] || message.member.id;
    const discordUser = await client.users.fetch(discUser);

    const dbUser = discordUser ? await User.findOne({ discordID: discordUser.id }) : undefined;

    const tornUser: tornAccount = tornUsers.find(user => user.username === (dbUser ? dbUser.accountName : discUser));
    if (!tornUser) return message.channel.send(`${m} That user does not exist!`);

    const sEmbed = new Discord.MessageEmbed()
        .setAuthor(`#${tornUser.placement} | ${tornUser.displayName}`, client.user.avatarURL())
        .setColor(config.colors.teams[tornUser.team])
        .setDescription(`This user is a ${tornUser.type.toLowerCase()}.\n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    return message.channel.send(sEmbed);
};

export {
    cmd,
    run
};
