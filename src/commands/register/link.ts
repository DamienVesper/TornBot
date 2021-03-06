import * as Discord from 'discord.js-light';

import { Client, CommandConfig } from '../../types/discord';
import { TornAccount } from '../../types/accounts';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

const cmd: CommandConfig = {
    desc: `Link your Torn account to Discord.`,
    usage: `<user>`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const m = `${message.author} »`;
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const userToLink = args[0].toString().toLowerCase();

    const userIsRegistered = await User.findOne({ discordID: message.author.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered) return message.channel.send(`${m} You are already linked to an account!`);
    else if (accountIsRegistered) return message.channel.send(`${m} That account has already been registered!`);
    else if (!tornUsers.get(userToLink)) return message.channel.send(`${m} That account does not exist!`);

    const user = new User({
        accountName: userToLink,
        discordID: message.author.id
    });

    user.save(() => message.channel.send(`${m} You are now linked to account \`${userToLink}\`.`));
};

export {
    cmd,
    run
};
