#!/usr/bin/env node

//esm
import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageTemplate } from "./packageTemplate.js";
import question from "./question/index.js";
import { createConfig } from "./config.js";
import execa from 'execa';
import path from 'path';

const ans = await question();
const inputConfig = createConfig(ans);

// happy path
//1.创建文件夹
fs.mkdirSync(getRootPath());
//2.创建index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));
//3.创建package.json
//练习点:基于数据生成 package.json
fs.writeFileSync(getRootPath() + "/package.json", createPackageTemplate(inputConfig));
//4.安装依赖
//TODO package 
execa("npm i", {
    cwd: getRootPath(),
    stdio: [2,2,2],
})

function getRootPath(){
    return path.resolve(process.cwd(), inputConfig.packageName)
}