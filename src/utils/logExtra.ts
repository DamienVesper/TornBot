import { author, version } from '../../package.json';

const logHeader = (callback?: any) => {
    console.log(`\x1b[34m`, `--------------------------------------------------`);

    if (callback !== undefined) return callback();
};

const logSplash = (callback?: any) => {
    console.log(`\x1b[34m`, `
    
    ████████╗ ██████╗ ██████╗ ███╗   ██╗██████╗  ██████╗ ████████╗
    ╚══██╔══╝██╔═══██╗██╔══██╗████╗  ██║██╔══██╗██╔═══██╗╚══██╔══╝
       ██║   ██║   ██║██████╔╝██╔██╗ ██║██████╔╝██║   ██║   ██║   
       ██║   ██║   ██║██╔══██╗██║╚██╗██║██╔══██╗██║   ██║   ██║   
       ██║   ╚██████╔╝██║  ██║██║ ╚████║██████╔╝╚██████╔╝   ██║   
       ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝    ╚═╝   

               Created by ${author} | v${version}
    `);

    if (callback !== undefined) return callback();
};

export {
    logHeader,
    logSplash
};
