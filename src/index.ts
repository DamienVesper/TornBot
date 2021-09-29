import Discord, { Intents } from 'discord.js';
import mongoose from 'mongoose';

import { Client } from './typings/discord';
import log from './utils/log';

import * as logExtra from './utils/logExtra';
import * as loader from './modules/loader';

import * as dotenv from 'dotenv';
dotenv.config();

const client: Client = new Discord.Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILDS
    ]
});

// Uncaught exception handler.
process.on(`uncaughtException`, e => log(`red`, e.stack));

/**
 * Start up the bot.
 */
const startBot = async () => {
    logExtra.logSplash();

    await loader.loadCommands(client);
    await loader.loadEvents(client);

    logExtra.logHeader();
    await mongoose.connect(process.env.MONGODB_URI);

    log(`green`, `Connected to database.`);

    logExtra.logHeader();
    await client.login(process.env.DISCORD_TOKEN).catch(() => log(`red`, `Failed to authenticate client with application.`));
};

// Actually start the bot.
startBot();
