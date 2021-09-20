const fs = require('fs');
const handlebars = require('handlebars')
const chalk = require('chalk')
module.exports = async () => {
    const list = fs.readdirSync('./src/views')
        .filter(v => v !== 'Home.vue')
        .map(v => ({
            name: v.replace('.vue', '').toLowerCase(),
            file: v,
        }))

        //����·�ɶ���
        compile({list}, './src/router.js', './template/router.js.hbs')
    
        //���ɲ˵�
        compile({list}, './src/App.vue', './template/App.js.hbs')
        
        function compile(meta, filePath, templatePath){
            if(fs.existsSync(templatePath)){
                const content = fs.readFileSync(templatePath).toString();
                const result = handlebars.compile(content)(meta);
                fs.writeFileSync(filePath, result);
                console.log(chalk.green(`${filePath}�����ɹ�`))
            }
        }

};