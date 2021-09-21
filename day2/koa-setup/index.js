//esm
import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageTemplate } from "./packageTemplate.js";
import question from "./question/index.js";
import { createConfig } from "./config.js";
import execa from 'execa';

const ans = await question();
const inputConfig = createConfig(ans);

// happy path
//1.�����ļ���
fs.mkdirSync(getRootPath());
//2.����index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));
//3.����package.json
//��ϰ��:������������ package.json
fs.writeFileSync(getRootPath() + "/package.json", createPackageTemplate(inputConfig));
//4.��װ����
//TODO package 
execa("npm i", {
    cwd: getRootPath(),
    stdio: [2,2,2],
})

function getRootPath(){
    console.log(process.cwd());
    return "./haha";
}