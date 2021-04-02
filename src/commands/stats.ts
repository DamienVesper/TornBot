import { config } from '../../config/config';

import * as Discord from 'discord.js';
import { Client } from '../index';

import { getTornUsers } from '../utils/getTornUsers';

export default {
    desc: `View user stats.`,
    usage: `[user]`
};

export const run = async (client: Client, message: Discord.Message, args: any[]) => {
    const m = `${message.author} »`;
    const tornUsers = await getTornUsers();

    const discUser = message.mentions.members.first()?.id || args[0] || message.member.id;
    const discordUser = client.users.get(discUser);

    const dbUser = discordUser ? await User.findOne({ discordID: discordUser.id }) : undefined;

    const tornUser = tornUsers.find(user => user.username === (dbUser ? dbUser.accountName : discUser));
    if (!tornUser) return message.channel.send(`${m} That user does not exist!`);

    const sEmbed = new Discord.RichEmbed()
        .setAuthor(`#${tornUser.placement} | ${tornUser.displayName}`, client.user.avatarURL)
        .setColor(tornUser.team === `Cyborg` ? 0x32cd32 : tornUser.team === `Alien` ?  : tornUser.team === `Human` ?  : 0x00000)
        .setDescription(`This user is a ${tornUser.type.toLowerCase()}.\n\n**Rank**: ${tornUser.rank}\n**Experience**: ${tornUser.xp}\n**Kills**: ${tornUser.kills}\n**Money**:  ${tornUser.money}\n**Tech**: ${tornUser.tech}`)
        .setTimestamp(new Date())
        .setFooter(config.footer);

    return message.channel.send(sEmbed);
};
