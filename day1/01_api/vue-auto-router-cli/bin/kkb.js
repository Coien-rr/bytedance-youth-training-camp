#!/usr/bin/env node
const program = require('commander');
//����ģʽ
program.version(require('../package.json').version);
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
program.parse(process.argv)

program.command('refresh') 
    .description('refresh routers...') 
    .action(require('../lib/refresh'))