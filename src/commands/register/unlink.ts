import * as Discord from 'discord.js';

import User from '../../models/user.model';
import { Client, CommandConfig } from '../../typings/discord';

const cmd: CommandConfig = {
    desc: `Unlink your Torn account from Discord.`
};

const run = async (client: Client, message: Discord.Message, args: string[]) => {
    const account = await User.findOne({ discordID: message.author.id });
    if (!account) return message.reply(`You are not linked to an account!`);

    User.deleteOne({ discordID: message.author.id })
        .catch(() => message.reply(`Failed to unlink your account. Please contact a developer.`))
        .then(() => message.reply(`Succesfully unlinked your account.`));
};

export {
    cmd,
    run
};
