//��ӡ��ӭ����
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const { clone } = require('./download');
const log = content => console.log(chalk.green(content));

module.exports = async name =>{
    clear();
    const data = await figlet.textSync('QZYT YYDS', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    });
    log(data);

    log('下载'+name);
    await clone("github:", name)
}
