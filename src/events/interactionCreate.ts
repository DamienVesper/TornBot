import config from '../../config/config';

import { ChannelType, type Interaction } from 'discord.js';

import log from '../utils/log';

import type { Client } from '../typings/discord';

export default async (client: Client, interaction: Interaction): Promise<void> => {
    if (interaction.isChatInputCommand() && interaction.guild !== null && interaction.channel?.type === ChannelType.GuildText) {
        if (process.env.NODE_ENV === `development` && !config.developers.includes(interaction.user.id)) return;

        // Grab the command from the handler.
        const cmd = client.commands?.get(interaction.commandName);

        // If the command doesn't exist, return.
        if (cmd == null) return;

        // Execute the command.
        log(`magenta`, `${interaction.user.tag} [${interaction.user.id}] ran command ${interaction.commandName} in ${interaction.guild.name}.`);
        cmd.run(client, interaction);
    }
};
