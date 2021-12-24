import * as Discord from 'discord.js';

import User from '../models/user.model';

const getQuery = async (interaction: Discord.CommandInteraction, username: string): Promise<string> => {
    if (!username) {
        username = (await User.findOne({ discordID: interaction.user.id }))?.accountName;
        if (!username) return undefined;
    } else {
        const dbUsername = (await User.findOne({ accountName: username }))?.accountName;
        if (dbUsername) username = dbUsername;
        else {
            const dbIDUsername = (await User.findOne({
                discordID:
                    username.startsWith(`<`)
                        ? username.slice(3, -1)
                        : username
            }))?.accountName;
            if (dbIDUsername) username = dbIDUsername;
        }
    }

    return username;
};

export default getQuery;
