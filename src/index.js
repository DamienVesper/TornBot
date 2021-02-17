require(`dotenv`).config();

const Discord = require(`discord.js`);
const fs = require(`fs`);
const path = require(`path`);

const log = require(`./utils/log.js`);
const config = require(`../config/config.js`);

const mongoose = require(`mongoose`);
mongoose.connect(config.db.uri, config.db.uriParams).then(() => log(`green`, `Connected to database.`)).catch(err => log(`red`, err.stack));

const client = new Discord.Client({
    fetchAllMembers: true,
    sync: true
});

// Export client.
module.exports = client;

// Load events.
const eventFiles = fs.readdirSync(path.resolve(__dirname, `./events`)).filter(file => file.endsWith(`js`));
for (const file of eventFiles) {
    const reqFile = require(`./events/${file}`);

    log(`yellow`, `Loaded event ${file}.`);
    client.on(file.split(`.`)[0], reqFile.bind(client));
}

// Load commands.
client.commands = [];
const commandFiles = fs.readdirSync(path.resolve(__dirname, `./commands`)).filter(file => file.endsWith(`js`));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    log(`yellow`, `Loaded command ${file}.`);
    client.commands.push({
        name: file.split(`.`)[0],
        desc: command.desc,
        usage: command.usage,
        run: command.run
    });
}

client.login(config.token).catch(() => log(`red`, `Failed to authenticate client with application.`));
