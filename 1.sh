pnpm run elog:sync-local
node generateSidebar.js
git init
git add .
git commit -m "20250326-2"
git remote set-url origin git@github.com:sunwu57/vitepress.git
git branch -M main
git config --global http.sslVerify "false"
git push -u origin main --force

