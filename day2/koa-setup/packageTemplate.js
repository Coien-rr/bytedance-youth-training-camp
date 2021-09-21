import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";

// ��������
// 1. �ֶ�����
// ģ��
// ����˼��  - С����Ŀ���˼��
// ��̬���ɴ���ģ��
export function createPackageTemplate(config) {
  const template = fs.readFileSync("./template/package.ejs", "utf-8");

  const code = ejs.render(template, {
    packageName: config.packageName,
    router: config.middleware.router,
    static: config.middleware.static,
  });

  return prettier.format(code, {
    parser: "json",
  });
}