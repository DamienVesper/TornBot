import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

interface Command {
    config: SlashCommandBuilder;
    run: any;
}

interface Event {
    callback: any;
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
