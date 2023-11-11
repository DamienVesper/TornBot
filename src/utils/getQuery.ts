import type { CommandInteraction } from 'discord.js';

import User from '../models/user.model';

const getQuery = async (interaction: CommandInteraction, username: string | undefined): Promise<string | undefined> => {
    if (username === undefined) {
        username = (await User.findOne({ discordID: interaction.user.id }))?.accountName;
        if (username === undefined) return undefined;
    } else {
        const dbUsername = (await User.findOne({ accountName: username }))?.accountName;
        if (dbUsername !== undefined) username = dbUsername;
        else {
            const dbIDUsername = (await User.findOne({
                discordID:
                    username.startsWith(`<`)
                        ? username.slice(3, -1)
                        : username
            }))?.accountName;
            if (dbIDUsername !== undefined) username = dbIDUsername;
        }
    }

    return username;
};

export default getQuery;
