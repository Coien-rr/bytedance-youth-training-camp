(async ()=> {
    const Sequelize = require('sequelize');

    const sequelize = new Sequelize('bytedance_youth_training', 'root', '111111',{
        host:'localhost',
        dialect:'mysql',
        operatorAliases: false
    })
    console.log('test');
    try {
        console.log('test');
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

    //定义模型
    const Fruit = sequelize.define("Fruit", { 
        name: { type: Sequelize.STRING(20), allowNull: false }, 
        price: { type: Sequelize.FLOAT, allowNull: false }, 
        stock: { type: Sequelize.INTEGER, defaultValue: 0 } 
    });

    let ret = await Fruit.sync();

    // ret = await Fruit.creat({
    //     name: '香蕉',
    //     price: 3.5
    // })
})