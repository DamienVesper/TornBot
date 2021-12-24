
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import log from './log';

import { Client } from '../typings/discord';

const deployCommands = async (client: Client): Promise<void> => {
    const rest = new REST({ version: `9` }).setToken(process.env.DISCORD_TOKEN);

    const commands: Object[] = [];
    for (const [name, command] of client.commands) {
        log(`yellow`, `Registering command ${name}...`);
        commands.push(command.cmd.toJSON());
    }

    await rest.put(Routes.applicationGuildCommands(process.env.DISCORD_ID, process.env.GUILD_ID), { body: commands })
        .then(() => {
            log(`green`, `Successfully registered application commands.`);
        }).catch(err => log(`red`, err));
};

export default deployCommands;
