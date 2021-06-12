import * as Discord from 'discord.js';
import User from '../../models/user.model';

import { Client, CommandConfig } from '../../types/discord';
import { tornAccount } from '../../types/account';

import getTornUsers from '../../utils/getTornUsers';
import updateRoles from '../../utils/updateRoles';

const cmd: CommandConfig = {
    desc: `Update your roles.`,
    aliases: [`h`, `?`]
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const m = `${message.author} »`;

    const tornUsers: tornAccount[] = await getTornUsers();

    const dbUser = await User.findOne({ discordID: message.author.id });
    if (!dbUser) return message.channel.send(`${m} You don't have an account yet!`);

    updateRoles(client, message.member, dbUser.accountName, tornUsers);
    message.channel.send(`${m} Updating roles...`);
};

export {
    cmd,
    run
};
