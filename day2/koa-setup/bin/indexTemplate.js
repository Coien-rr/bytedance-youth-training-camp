import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";

// ��������
// 1. �ֶ�����
// ģ��
// ����˼��  - С����Ŀ���˼��
// ��̬���ɴ���ģ��
export function createIndexTemplate(config) {
  const template = fs.readFileSync("./template/index.ejs", "utf-8");

  const code = ejs.render(template, {
    router: config.middleware.router,
    static: config.middleware.static,
    port: config.port,
  });

  return prettier.format(code, {
      parser: "babel",
  });
}