import { version } from '../package.json';

import colors from './colors';
import cooldowns from './cooldowns';
import { emojis, emojiIDs } from './emojis';
import help from './help';
import roles from './roles';

import type { Snowflake } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

interface Config {
    /**
     * An array of user IDs given superuser access.
     */
    developers: Snowflake[]
    modules: {
        help: typeof help
    }

    /**
     * The guild ID to enable custom commands in.
     */
    guild: Snowflake

    colors: typeof colors
    cooldowns: typeof cooldowns
    emojis: typeof emojis
    emojiIDs: typeof emojiIDs
    roles: typeof roles

    version: typeof version

    /**
     * Custom footer data used as default text for embeds.
     */
    footer: string
}

const config: Config = {
    developers: [
        `386940319666667521`
    ],

    modules: {
        help
    },

    guild: `1077043833621184563`,

    colors,
    cooldowns,
    emojis,
    emojiIDs,
    roles,

    version,

    footer: `TornBot | v${version}`
};

export default config;
