const pjson = require(`../../package.json`);
module.exports = () => {
    console.log(`\x1b[34m`, `
     _____               ______       _   
    |_   _|              | ___ \\     | |  
      | | ___  _ __ _ __ | |_/ / ___ | |_ 
      | |/ _ \\| '__| '_ \\| ___ \\/ _ \\| __|
      | | (_) | |  | | | | |_/ / (_) | |_ 
      \\_/\\___/|_|  |_| |_\\____/ \\___/ \\__|                                       

        Created by ${pjson.author} | v${pjson.version}
      `);
};
