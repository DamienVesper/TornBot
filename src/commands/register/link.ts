import * as Discord from 'discord.js';

import { Client, CommandConfig } from '../../typings/discord';
import { TornAccount } from '../../typings/accounts';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

const cmd: CommandConfig = {
    desc: `Link your Torn account to Discord.`,
    usage: `<user>`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const userToLink = args[0].toString().toLowerCase();

    const userIsRegistered = await User.findOne({ discordID: message.author.id });
    const accountIsRegistered = await User.findOne({ accountName: userToLink });

    if (userIsRegistered) return message.reply(`You are already linked to an account!`);
    else if (accountIsRegistered) return message.reply(`That account has already been registered!`);
    else if (!tornUsers.get(userToLink)) return message.reply(`That account does not exist!`);

    const user = new User({
        accountName: userToLink,
        discordID: message.author.id
    });

    user.save(() => message.reply(`You are now linked to account \`${userToLink}\`.`));
};

export {
    cmd,
    run
};
