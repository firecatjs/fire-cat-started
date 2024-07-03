# 使用官方 Node.js 镜像作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制 dist 目录中的 package.json 文件到工作目录
COPY dist/package.json ./

# 安装依赖
RUN npm install --production

# 复制 dist 目录中的所有文件到工作目录
COPY dist ./

# 暴露应用的端口
EXPOSE 3000

# 启动应用
CMD ["node", "./service/index.js"]