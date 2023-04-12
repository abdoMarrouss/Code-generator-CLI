#! /usr/bin/env node
const { exec } = require('child_process');
const readline = require('readline');
const yargs = require("yargs");
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const chalk = require('chalk');
const figlet = require('figlet');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let appName;
rl.question('What do you want to name your NestJS application? ', (appName) => {
    this.appName = appName; 
    rl.question(`Which package manager do you want to use for ${appName}? (npm/yarn) `, (pkgManager) => {
        if (pkgManager === 'npm' || pkgManager === 'yarn') {

            const createStaticNestApp = ` cd targetApp && npx @nestjs/cli new ${appName} --package-manager ${pkgManager}`;
            //export the appName here before executing the compileCode command
            const compileCode = `tsc && npm start`;

            exec(createStaticNestApp, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);

                exec(compileCode, (error2, stdout2, stderr2) => {
                    if (error2) {
                        console.error(`Error: ${error2}`);
                        return;
                    }
                    console.log(`stdout: ${stdout2}`);
                    console.error(`stderr: ${stderr2}`);
                    if (argv.language == null && argv.l == null) {
                      console.log(
                          chalk.yellow(
                              figlet.textSync('iCode', { horizontalLayout: 'default' })
                          )
                      )
                      yargs.showHelp();
                      return;
                  }
                    
                });
            });
        } else {
            console.error('Invalid package manager specified. Please specify either "npm" or "yarn".');
        }
        rl.close();
    });
});

module.exports = appName; // Export appName for use in other files

