# fire-cat-started
项目模板

## 启动
`npm run dev`

## 打包

### 正常模式打包
打包成单个服务文件
`npm run build`

### 目录详细形式打包

打包成目录结构

`npm run build:tree-mode`

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