import User from '../models/user.model';

import * as Discord from 'discord.js';
import { Client } from '../index';

import { tornAccount, getTornUsers } from '../utils/getTornUsers';
import updateRoles from '../utils/updateRoles';

export default {
    desc: `Update your roles.`,
    aliases: [`h`, `?`]
};

export const run = async (client: Client, message: Discord.Message, args: any[]) => {
    const m: String = `${message.author} »`;

    const tornUsers: tornAccount[] = await getTornUsers();

    const dbUser = await User.findOne({ discordID: message.author.id });
    if (!dbUser) return message.channel.send(`${m} You don't have an account yet!`);

    updateRoles(client, message.member, dbUser.accountName, tornUsers);
    message.channel.send(`${m} Updating roles...`);
};
