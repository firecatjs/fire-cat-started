# fire-cat-started
fire-cat project template

## run
`npm run dev`

## build

### normal build
packaged into a single service file  
`npm run build`

### tree mode build
packaged into a directory structure  
`npm run build:tree-mode`

## deploy
### deploy by pm2

```bash
cd dist

yarn

pm2 start ecosystem.config.js
```

### deploy by docker

```bash
docker build -t your-app-name .

docker run -p 3000:3000 your-app-name
```