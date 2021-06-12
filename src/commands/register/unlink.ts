import * as Discord from 'discord.js';

import User from '../../models/user.model';
import { Client, CommandConfig } from '../../types/discord';

const cmd: CommandConfig = {
    desc: `Unlink your Torn account from Discord.`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const m = `${message.author} »`;

    const account = await User.findOne({ discordID: message.author.id });
    if (!account) return message.channel.send(`${m} You are not linked to an account!`);

    User.deleteOne({ discordID: message.author.id })
        .catch(() => message.channel.send(`${m} Failed to unlink your account. Please contact a developer.`))
        .then(() => message.channel.send(`${m} Succesfully unlinked your account.`));
};

export {
    cmd,
    run
};
