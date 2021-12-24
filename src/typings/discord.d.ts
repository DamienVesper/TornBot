import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

interface Command {
    config: SlashCommandBuilder;
    run: (client: Discord.Client, interaction: Discord.CommandInteraction) => void;
}

interface Event {
    name: string;
    run: (...any) => void;
}

interface Client extends Discord.Client {
    commands?: Map<string, Command>;
    events?: Map<string, Event>;
}

export {
    Client,
    Command,
    Event
};
