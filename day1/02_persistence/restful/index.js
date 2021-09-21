const Koa = require('koa');
const app = new Koa();

const config = require('./conf');
const {loadMedel} = require('./framework/loader.js');
loadMedel(config)(app)

app.listen(3000, ()=>{
    console.log('Server at 3000...')
})


