import * as Discord from 'discord.js';
import { Client } from '../typings/discord';

import log from '../utils/log';

export default async (client: Client, interaction: Discord.Interaction) => {
    if (!interaction.isCommand()) return;

    // Grab the command from the handler.
    const cmd = client.commands.get(interaction.commandName);

    // If the command doesn't exist, return.
    if (!cmd) return;

    // Execute the command.
    log(`magenta`, `${interaction.user.tag} [${interaction.user.id}] ran command ${interaction.commandName} in ${interaction.guild.name}.`);
    cmd.run(client, interaction);
};
