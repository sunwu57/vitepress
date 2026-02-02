const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, 'docs/docs'); // 你的文档目录
const outputFile = path.resolve(__dirname, 'docs/.vitepress/sidebar.js');

const sidebar = {};

function walkDir(currentDirPath, baseRoute) {
  const entries = fs.readdirSync(currentDirPath, { withFileTypes: true });

  const items = entries
    .filter(entry => {
      return (
        entry.isFile() &&
        entry.name.endsWith('.md') &&
        !['index.md', 'README.md'].includes(entry.name)
      );
    })
    .map(entry => {
      const name = entry.name.replace(/\.md$/, '');
      return {
        text: name,
        link: `${baseRoute}${name}`
      };
    });

  entries
    .filter(entry => entry.isDirectory())
    .forEach(dir => {
      const subDirPath = path.join(currentDirPath, dir.name);
      const subRoute = `${baseRoute}${dir.name}/`;
      const children = walkDir(subDirPath, subRoute);
      if (children.length > 0) {
        items.push({
          text: dir.name,
          items: children
        });
      }
    });

  return items;
}

function generateSidebar() {
  const sections = fs.readdirSync(docsDir, { withFileTypes: true });

  sections.forEach(section => {
    if (section.isDirectory()) {
      const basePath = `/docs/${section.name}/`;
      const fullPath = path.join(docsDir, section.name);
      const items = walkDir(fullPath, basePath);

      if (items.length > 0) {
        sidebar[basePath] = [
          {
            text: section.name,
            items
          }
        ];
      }
    }
  });

  return sidebar;
}

const sidebarConfig = generateSidebar();

// 写入 ESM 导出
const content = `export default ${JSON.stringify(sidebarConfig, null, 2)};\n`;
fs.writeFileSync(outputFile, content, 'utf-8');

console.log('✅ 自动 sidebar.js 已生成于 docs/.vitepress/sidebar.js');
