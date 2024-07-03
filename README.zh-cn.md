# fire-cat-started
项目模板

## 启动
`npm run dev`

## 打包

`npm run build`

输出

```bash
dist
└── app
   ├──...
   └──index.js
├── .env
├── ecosystem.config.js
└── package.json
```
## 部署

### 使用 pm2 部署

```bash
cd dist

yarn

pm2 start ecosystem.config.js
```

### 使用docker部署

```bash
docker build -t your-app-name .

docker run -p 3000:3000 your-app-name
```
