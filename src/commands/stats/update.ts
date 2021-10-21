import * as Discord from 'discord.js';
import { Client, CommandConfig } from '../../typings/discord';

import updateRoles from '../../utils/updateRoles';
import { TornAccount } from '../../typings/accounts';

import User from '../../models/user.model';
import Leaderboard from '../../models/leaderboard.model';

const cmd: CommandConfig = {
    desc: `Update your roles.`,
    aliases: [`h`, `?`]
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const tornUsers: Map<string, TornAccount> = (await Leaderboard.findOne()).accounts;

    const dbUser = await User.findOne({ discordID: message.author.id });
    if (!dbUser) return message.reply(`You don't have an account yet!`);

    updateRoles(message.member, dbUser.accountName, tornUsers);
    message.reply(`Updating roles...`);
};

export {
    cmd,
    run
};
