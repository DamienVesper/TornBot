
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import log from './log';
import { logHeader } from './logExtra';

import { Client } from '../typings/discord';

const deployCommands = async (client: Client): Promise<void> => {
    const rest = new REST({ version: `9` }).setToken((process.env.DISCORD_TOKEN as string));

    const commands: Object[] = [];
    for (const [name, command] of client.commands) {
        logHeader();
        log(`yellow`, `Registering command ${name}...`);
        commands.push(command.cmd.toJSON());
    }

    await rest.put(Routes.applicationGuildCommands((process.env.DISCORD_ID as string), (process.env.GUILD_ID as string), { body: commands });

    log(`green`, `Successfully registered application commands.`);
    logHeader();
};

export default deployCommands;
