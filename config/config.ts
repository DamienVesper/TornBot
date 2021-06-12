import { author, version } from '../package.json';

import colors from './colors';

import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    colors,

    developerID: `386940319666667521`,
    botChannel: `493489353046097926`,

    prefix: `;`,

    version,
    footer: `© Created by ${author} | v${version}`
};

export default config;
