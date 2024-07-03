# FireCat Started
FireCat Project Template

## Run
`npm run dev`

## Build

### Normal build
packaged into a single service file  
`npm run build`

### Tree mode build
packaged into a directory structure  
`npm run build:tree-mode`

## Deploy
### Deploy by pm2

```bash
cd dist

yarn

pm2 start ecosystem.config.js
```

### Deploy by docker

```bash
docker build -t your-app-name .

docker run -p 3000:3000 your-app-name
```