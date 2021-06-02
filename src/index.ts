import * as fs from 'fs';
import * as Discord from 'discord.js';
import * as path from 'path';

import * as mongoose from 'mongoose';

import { log, logHeader, logSplash } from './utils/log';

import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

export interface Client extends Discord.Client {
    commands?: any[]
    events?: any[]
}

const client: Client = new Discord.Client({
    disableMentions: `everyone`,
    fetchAllMembers: true
});

// Uncaught handler.
process.on(`uncaughtException`, e => log(`red`, e.stack));

logSplash();

// Load events.
logHeader();
const eventFiles = fs.readdirSync(path.resolve(__dirname, `./events`));
for (const file of eventFiles) {
    const event = require(`./events/${file}`).default;

    log(`yellow`, `Loaded event ${file}.`);
    client.on(file.split(`.`)[0], event.bind(null, client));
}

// Load commands.
logHeader();
client.commands = [];
const commandFiles = fs.readdirSync(path.resolve(__dirname, `./commands`));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    log(`yellow`, `Loaded command ${file}.`);
    client.commands.push({
        name: file.split(`.`)[0],
        desc: command.default.desc,
        usage: command.default.usage,
        aliases: command.default.aliases,
        run: command.run
    });
}

logHeader();
client.login(process.env.DISCORD_BOT_TOKEN).catch(() => log(`red`, `Failed to authenticate client with application.`));
