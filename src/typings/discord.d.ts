import type * as Discord from 'discord.js';
import { type SlashCommandBuilder } from '@discordjs/builders';

interface Command {
    cmd: SlashCommandBuilder
    run: (client: Discord.Client, interaction: Discord.CommandInteraction) => void
}

interface Event {
    callback: (...any) => void
}

interface Client extends Discord.Client {
    commands?: Map<string, Command>
    events?: Map<string, Event>
}

export type {
    Client,
    Command,
    Event
};
