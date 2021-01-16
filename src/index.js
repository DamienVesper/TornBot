// Dependencies
const Discord = require(`discord.js`);
const fs = require(`fs`);
const dotenv = require(`dotenv`).config();

/* Client Configuration */
const config = require(`../config/config.js`);
const client = new Discord.Client({
    fetchAllMembers: true,
    sync: true
});

const mongoDB = require(`mongodb`);
const mongoose = require(`mongoose`);

mongoose.connect(config.db.uri, config.db.uriParams).then(() => console.log(`Connected to database.`)).catch(err => console.error(err));

// Export config and client for commands / events.
module.exports = {
    config,
    client
}
client.api = require(`./api.js`);

// Load events.
client.on(`ready`, async () => {
    console.log(`${client.user.username}#${client.user.discriminator} has started, with ${client.users.size} users in ${client.guilds.size} servers.`);
    refreshActivity();
});

/* Client Commands */
client.commands = new Discord.Collection();
fs.readdir(`./src/commands/`, (err, files) => {
    if (err) console.error(err);

    let jsFiles = files.filter(f => f.split(`.`).pop() == `js`);
    if (jsFiles.length <= 0) return console.log(`No commands to load!`);

    /* Load Commands */
    jsFiles.forEach(f => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.name, props);
    });
    // console.log(`[${client.shard.id}]: Loaded ${jsFiles.length} command${jsFiles.length === 1 ? ``: `s`}!`);
    console.log(`Loaded ${jsFiles.length} command${jsFiles.length === 1 ? ``: `s`}!`);
});

/* Client Checks */
const refreshActivity = async () => {
    client.user.setPresence({
        game: {
            name: `${client.users.size} players on Torn.Space`,
            type: `WATCHING`
        },
        status: `dnd`
    });
}

client.on(`message`, async message => {
    /* Botception & Message Handling */
    if (message.author.bot || message.channel.type == `dm`) return;
    if (message.content.slice(0, config.prefix.length).toString().toLowerCase() != config.prefix) return;

    if (message.guild.id == `247490958374076416` & message.channel.id != `493489353046097926`) return message.delete();

    /* Get Commands & Arguments */
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    /* Validate Commands */
    let cmd = client.commands.get(command);

    if (!cmd) return;
    else if ((cmd.usage) && args.length < (cmd.usage.split(`<`).length) - 1) return message.channel.send(`${message.author} Proper usage is \`${config.prefix + cmd.name} ${cmd.usage}\`.`);
    else {
        try {
            // console.log(`${message.author.tag} ran command ${command} in ${message.guild.name} [${message.guild.id}] on shard ${client.shard.id}.`);
            console.log(`${message.author.tag} ran command ${command} in ${message.guild.name} [${message.guild.id}].`);
            cmd.run(client, message, args);
        } catch (err) {
            console.log(`There was an error executing command ${command} by ${message.author.tag}.`)
        }
    }
});

client.login(config.token).catch(err => console.error(`Failed to authenticate client with application.`));
client.setMaxListeners(0);