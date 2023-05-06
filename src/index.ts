import Discord, { Intents } from 'discord.js';
import mongoose from 'mongoose';

import { Client } from './typings/discord';
import * as loader from './modules/loader';

import log from './utils/log';
import * as logExtra from './utils/logExtra';
import deployCommands from './utils/deployCommands';

import * as dotenv from 'dotenv';
dotenv.config();

const client: Client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILDS
    ]
});

/**
 * Prevents crash on error.
 */
process.on(`uncaughtException`, err => log(`red`, err.stack ?? err.message));

/**
 * Start up the bot.
 */
const main = async (): Promise<void> => {
    console.clear();
    logExtra.logSplash();

    await loader.loadCommands(client);
    await loader.loadEvents(client);

    if (process.env.MONGODB_URI !== undefined) {
        logExtra.logHeader();
        await mongoose.connect(process.env.MONGODB_URI);
        log(`green`, `Connected to database.`);
    }

    if (process.env.DEV_ENV !== undefined) {
        logExtra.logHeader();
        await deployCommands(client);
    }

    logExtra.logHeader();
    await client.login(process.env.DISCORD_TOKEN).catch(() => log(`red`, `Failed to authenticate client with application.`));
};

// Start the programe.
void main();
