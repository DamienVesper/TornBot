import * as Discord from 'discord.js';

/**
 * Get a valid MongoDB query from a message.
 * @param message The Discord message to pull from.
 * @param args The arguments passed in the command.
 * @returns The MongoDB query to use.
 */
const getQuery = (message: Discord.Message, args: string[]) => {
    let query = {};
    let queryParam = message.mentions.members.first()?.id;

    if (queryParam) query = { discordID: queryParam };
    else {
        queryParam = args[0];
        if (queryParam) {
            const isID = parseInt(queryParam);
            query = isID ? { discordID: queryParam } : { accountName: queryParam.toLowerCase() };
        } else query = { discordID: message.author.id };
    }

    return query;
};

export default getQuery;
