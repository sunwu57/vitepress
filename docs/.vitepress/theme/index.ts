// 1. 导入 vitepress 主题
import Theme from '@escook/vitepress-theme'
// 2. 导入配套的 CSS 样式（此步骤不能省略）
import '@escook/vitepress-theme/style.css'
import 'prismjs';
import 'prismjs/components/prism-jsp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ss';

// 3. 把“导入”的主题“默认导出”即可
export default Theme