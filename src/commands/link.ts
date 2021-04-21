import * as Discord from 'discord.js';
import { Client } from '../index';

import { User } from '../models/user.model';
import { tornAccount, getTornUsers } from '../utils/getTornUsers';

export default {
    desc: `Link your Torn account to Discord.`,
    usage: `<user>`
};

export const run = async (client: Client, message: Discord.Message, args: any[]) => {
    const m: String = `${message.author} »`;

    const tornUsers: tornAccount[] = await getTornUsers();

    const userToLink = args[0].toString().toLowerCase();

    const userIsRegistered = await User.findOne({ discordID: message.author.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered) return message.channel.send(`${m} You are already linked to an account!`);
    else if (accountIsRegistered) return message.channel.send(`${m} That account has already been registered!`);
    else if (!tornUsers.find(user => user.username === userToLink)) return message.channel.send(`${m} That account does not exist!`);

    const user = new User({
        accountName: userToLink,
        discordID: message.author.id
    });

    user.save(() => message.channel.send(`${m} You are now linked to account \`${userToLink}\`.`));
};
