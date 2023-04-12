#! /usr/bin/env node
const chalk = require('chalk')
const boxen = require('boxen')
const translate = require('@vitalets/google-translate-api');
const yargs = require("yargs");
const figlet = require('figlet');

const usage = chalk.keyword('violet')("\n\n"
+ boxen(chalk.green("\n" + "WELCOME" + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
const options = yargs
      .usage(usage)
      .help(true)
      .argv;

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

if(argv.language == null && argv.l == null){
    console.log(
        chalk.yellow(
          figlet.textSync('iCode', { horizontalLayout: 'full' })
        )
      )
    yargs.showHelp();
    return;
}
