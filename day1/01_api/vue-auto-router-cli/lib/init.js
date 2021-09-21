const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const open = require('open')
const { clone } = require('./download');
const log = content => console.log(chalk.green(content));

require('child_process');
const spawn = async(...args)=>{
    //同步promise api
    //输出流 子进程 合并到主进程
    const {spawn} = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', ()=>{
            resolve();
        })
    })
}

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

   //项目模板
   log('创建项目'+name);
   await clone("github:su37josephxia/vue-template", name);

   //下载依赖 npm i
   
   log(`安装依赖......`);
   await spawn('npm', ['install'], {cwd :`./${name}`});
   const open = open('http://localhost:8081');
}
