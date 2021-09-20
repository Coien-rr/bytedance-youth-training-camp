#!/usr/bin/env node
const program = require('commander');
//²ßÂÔÄ£Ê½
program.version(require('../package.json').version);
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
program.parse(process.argv)